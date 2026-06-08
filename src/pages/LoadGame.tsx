import { useNavigate } from "react-router-dom"
import "./Episodes.css"
import { useState } from "react"

function LoadGame() {

  const navigate = useNavigate()

  const [saves, setSaves] = useState(
    JSON.parse(
      localStorage.getItem("whiskerSaves") || "[]"
    )
  )

  function loadSave(id: number) {

    localStorage.setItem(
      "currentSave",
      JSON.stringify(id)
    )

    navigate("/episodes")
  }

  function deleteSave(id: number) {

    const confirmDelete = window.confirm(
      "Deseja deletar este save permanentemente?"
    )

    if (!confirmDelete) return

    const updatedSaves = saves.filter(
      (save: any) => save.id !== id
    )

    localStorage.setItem(
      "whiskerSaves",
      JSON.stringify(updatedSaves)
    )

    setSaves(updatedSaves)
  }

  return (
    <div className="episodes-screen">

      <div className="episodes-title">
        CARREGAR JOGO
      </div>

      <div className="episodes-container">

        {saves.length === 0 && (
          <div className="episode-card locked">

            <div className="episode-name">
              Nenhum save encontrado
            </div>

          </div>
        )}

        {saves.map((save: any) => (

          <div
            key={save.id}
            className="episode-card available"
          >

            <div className="episode-name">
              {save.player.name}
            </div>

            <div className="episode-description">
              Mestre: {
                save.chosenMaster || "Nenhum"
              }
            </div>

            <div className="episode-description">
              Afeição: {save.affection}
            </div>

            <button
              className="play-button"
              onClick={() => loadSave(save.id)}
            >
              Carregar
            </button>

            <button
              className="delete-button"
              onClick={() => deleteSave(save.id)}
            >
              Deletar
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default LoadGame