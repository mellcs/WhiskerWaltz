import { useState } from "react"
import "./Assistant.css"

function Assistant() {

  const [isOpen, setIsOpen] = useState(false)

  const [message, setMessage] = useState("")

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Olá! Sou o assistente do Vale do Lírio. Pode me perguntar qualquer coisa.",
    },
  ])

  async function sendMessage() {

    if (!message.trim()) return

    const userMessage = {
      role: "user",
      content: message,
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
    ])

    try {

      const response = await fetch(
        "http://localhost:3001/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      )

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ])

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Erro ao falar com o assistente.",
        },
      ])
    }

    setMessage("")
  }

  return (
    <>

      {/* BOLINHA */}
      <button
        className="assistant-toggle"
        onClick={() =>
          setIsOpen(!isOpen)
        }
      >
        🪲
      </button>

      {/* JANELA */}
      {isOpen && (

        <div className="assistant-window">

          <div className="assistant-header">
            Assistente do Vale
          </div>

          <div className="assistant-messages">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? "user-message"
                      : "assistant-message"
                  }
                >
                  {msg.content}
                </div>
              )
            )}

          </div>

          <div className="assistant-input-area">

            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Pergunte algo..."
            />

            <button
              onClick={sendMessage}
            >
              Enviar
            </button>

          </div>

        </div>
      )}
    </>
  )
}

export default Assistant