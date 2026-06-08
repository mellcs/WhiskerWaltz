import express from "express"
import cors from "cors"

import {
  loadLore,
  searchLore,
} from "./rag.js"

const app = express()

app.use(cors())

app.use(express.json())

// CARREGAR LORE
loadLore()

// CHAT
app.post("/chat", async (req, res) => {

  try {

    const userMessage =
      req.body.message

    console.log(
      "Mensagem:",
      userMessage
    )

    // BUSCA CONTEXTO
    const loreContext =
      searchLore(userMessage)

    // PROMPT
    const prompt = `
Você é um assistente do jogo Whisker Waltz.

Você vive no universo do Vale do Lírio.

Responda de forma gentil, acolhedora e imersiva.

Use apenas as informações abaixo.

UNIVERSO:
${loreContext}

PERGUNTA:
${userMessage}
`

    // OLLAMA
    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model: "llama3",
          prompt,
          stream: false,
        }),
      }
    )

    const data =
      await response.json()

    res.json({
      reply: data.response,
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      reply:
        "Erro ao falar com o assistente.",
    })
  }
})

app.listen(3001, () => {

  console.log(
    "Servidor rodando!"
  )
})