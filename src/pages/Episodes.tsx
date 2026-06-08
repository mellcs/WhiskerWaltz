import "./Episodes.css"
import { useNavigate } from "react-router-dom"

function Episodes() {

  const navigate = useNavigate()

  function playEpisode1() {
    navigate("/ep1")
  }

  return (
    <div className="episodes-screen">

      {/* BOTÃO VOLTAR */}
      <button
        className="back-menu-button"
        onClick={() => navigate("/")}
      >
        Voltar ao Menu
      </button>

      {/* BACKGROUND */}
      <img
        className="episodes-background"
        alt=""
      />

      {/* TÍTULO */}
      <div className="episodes-title">
        EPISÓDIOS
      </div>

      {/* LISTA */}
      <div className="episodes-container">

        {/* EP 1 */}
        <div className="episode-card available">

          <div className="episode-number">
            EPISÓDIO 1
          </div>

          <div className="episode-name">
            Escolhas no Vale do Lírio
          </div>

          <div className="episode-description">
            O início da jornada.
          </div>

          <button
            className="play-button"
            onClick={playEpisode1}
          >
            Jogar
          </button>

        </div>

        {/* EP 2 */}
        <div className="episode-card locked">

          <div className="episode-number">
            EPISÓDIO 2
          </div>

          <div className="episode-name">
            Em breve...
          </div>

          <div className="episode-description">
            Novas aventuras chegarão em breve.
          </div>

          <button className="locked-button">
            Indisponível
          </button>

        </div>

        {/* EP 3 */}
        <div className="episode-card locked">

          <div className="episode-number">
            EPISÓDIO 3
          </div>

          <div className="episode-name">
            Em breve...
          </div>

          <div className="episode-description">
            Novas aventuras chegarão em breve.
          </div>

          <button className="locked-button">
            Indisponível
          </button>

        </div>

      </div>

    </div>
  )
}

export default Episodes