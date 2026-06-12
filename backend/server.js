import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"
import { loadLore, searchLore } from "./rag.js"

dotenv.config()

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN,
})

const app = express()

app.use(cors({
  origin: /\.vercel\.app$/
}))
app.use(express.json())

loadLore()

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message

    if (!userMessage) {
      return res.status(400).json({ reply: "Mensagem não informada." })
    }

    console.log("Mensagem:", userMessage)

    const loreContext = searchLore(userMessage)

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

    const completion = await client.chat.completions.create({
      model: "google/gemma-2-2b-it:featherless-ai",
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 300,
    })

    const reply =
      completion.choices?.[0]?.message?.content || "Sem resposta."

    console.log("REPLY:", reply)

    res.json({ reply })  // ← estava faltando

  } catch (error) {
    console.error(error)
    res.status(500).json({ reply: "Erro ao falar com o assistente." })
  }
})

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`))
