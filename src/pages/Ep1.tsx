import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Ep1.css"

function Ep1() {

  const navigate = useNavigate()

  // SAVES
  const saves = JSON.parse(
    localStorage.getItem("whiskerSaves") || "[]"
  )

  const currentSaveId = JSON.parse(
    localStorage.getItem("currentSave") || "0"
  )

  const currentSave = saves.find(
    (save: any) => save.id === currentSaveId
  )

  const player = currentSave?.player

  // PRONOMES
  function getPronouns() {

    if (player?.pronoun === "Ela/Dela") {
      return {
        subject: "ela",
        object: "a",
        possessive: "dela",
        being: "a",
        capitalSubject: "Ela",
      }
    }

    if (player?.pronoun === "Ele/Dele") {
      return {
        subject: "ele",
        object: "o",
        possessive: "dele",
        being: "",
        capitalSubject: "Ele",
      }
    }

    return {
      subject: "elu",
      object: "e",
      possessive: "delu",
      being: "e",
      capitalSubject: "Elu",
    }
  }

  const pronouns = getPronouns()

  // TEXTOS
  const story = [

    "Era uma manhã de fim de verão no Vale do Lírio. A luz entra pela janelinha de casca de carvalho em faixas douradas, aquecendo o chão e fazendo o pó brilhar no ar parado. Cheirava a mato molhado, a pão de semente esquecido na brasa, e ao perfume adocicado dos lírios que cresciam até a soleira da porta.",

    `Em cima de um ninho de retalhos e algodão, enrolad${pronouns.object} num retalho de linho desbotado, um${pronouns.being} ratinh${pronouns.object} dormia. Lá fora, a vila já havia acordado há tempo. O sino da padaria tinha dobrado, os tordos gritavam nos beirais. Uma borboleta pousou na soleira por um segundo e foi embora sem motivo nenhum.`,

    `A luz bateu em seu pelo macio e pinicou seu nariz. ${pronouns.capitalSubject} se enroscou mais nas cobertas, até perceber que o sol estava alto. Alto demais.`,

    `${player?.name} pulou de seu ninho, tropeçando em sementes e pedaços de lã, se vestiu o mais rápido possível e enfiou um pedaço de pão na boca antes de sair porta á fora.`,

    `De todos os dias para se atrasar, tinha que ser justo hoje.`,

    `${player?.name} rapidamente se dirigiu pra a praça principal, onde seus possíveis mestres ${pronouns.object} aguardavam. Esse é o momento de fazer um escolha muito importante para seu futuro!`,

    `E ${pronouns.subject} ainda estava nervos${pronouns.object}.`,

    // PRIMI
    `[primi][happy]- Que bom que você chegou! Achamos que não fosse mais vir.`,

    `[primi][neutral]Primi é a mestra costureira do Vale do Lírio, sempre com ferramentas para seu trabalho.`,

    `[primi][happy]- Pode ficar á vontade, temos chá quentinho.`,

    `[primi][neutral]Ela sempre fazia todo mundo sentir como se fossem importantes. Como se sempre tivesse um lugar reservado.`,

    // BUNGO
    `[bungo][happy]Uma gargalhada soa ao lado dela, como se fosse um passarinho trinando.`,

    `[bungo][happy]- Pelo menos ${pronouns.subject} veio! Eu contei cinco faltas até agora.`,

    `[bungo][neutral]Bungo é o mestre coletor, que se aventura até as casas humanas e cantos movimentados da floresta em busca de recursos.`,

    `[bungo][neutral]Isso explica seu tamanho, que era ao mesmo tempo grande demais para a praça e do tamanho perfeito.`,

    // CARIN
    `[carin][happy]- Não tem muita pressa, de qualquer jeito. Não é como se estivéssemos desesperados.`,

    `[carin][neutral]A voz calma vem de algum lugar atrás de Bungo, e quando ele se move é possível ver Carin, a mestre pescadora.`,

    `[carin][neutral]Ela raramente é vista na vila, ocupada demais no lago ou cochilando em sua toca.`,

    // CLOVE
    `[clove][sad]- Na verdade isso é preocupante! Outros mestres já foram escolhidos, se só sobraram nós quatro, então pode ter algo de errado com gente.`,

    `[clove][neutral]Por fim, o irmão dela, mestre inventor Clove, que é tão ansioso quanto é brilhante.`,

    // RESTO
    `Dá pra ver que o comentário deixou todos desconfortáveis, pois os outros mestres já estavam trabalhando com seus aprendizes: padeiros, artesãos, marceneiros, curandeiros, jardineiros. Mas talvez ninguém estivesse interessado nos quatro presentes.`,

    `${player?.name} respirou fundo antes de começar a falar.`,

    `- Bem... Eu estou aqui.`,

    `Os mestres olharam pra ${pronouns.subject} sem piscar.`,

    `[primi][happy]- Claro! Então, você já sabe quem vai escolher?`,

    `Finalmente. O momento que ${pronouns.subject} tinha esperado ansiosamente pelos últimos dois anos tinha chegado.`,
  ]

  const [currentText, setCurrentText] = useState(0)
  const [chosenMaster, setChosenMaster] = useState("")
  const [routeText, setRouteText] = useState(0)

  // AFEIÇÃO
  const [affection, setAffection] = useState(
    currentSave?.affection || 0
  )

  // ROTAS
  const primiRoute = [
    "- Prometo cuidar muito bem de você.",
    `O sorriso de Primi era tão acolhedor que ${player?.name} sentiu parte do nervosismo desaparecer.`,
    `Talvez linhas, tecidos e pequenos remendos fossem capazes de mudar uma vida inteira.`,
    `TERMINAR EPISÓDIO`,
  ]

  const bungoRoute = [
    `- Você não vai se arrepender, pequenin${pronouns.object}.`,
    `A energia de Bungo parecia contagiante, como vento forte antes de uma aventura.`,
    `Talvez o mundo fosse muito maior do que ${player?.name} imaginava.`,
    `TERMINAR EPISÓDIO`,
  ]

  const carinRoute = [
    "- Acho que vamos nos dar bem.",
    `Carin falava tão calmamente que até o barulho da praça parecia distante.`,
    `Talvez existisse conforto nas águas silenciosas do lago.`,
    `TERMINAR EPISÓDIO`,
  ]

  const cloveRoute = [
    "- Ah! Certo! Eu vou fazer meu melhor!",
    `Clove parecia nervoso, mas seus olhos brilhavam como lanternas acesas.`,
    `Talvez as invenções mais bonitas nascessem justamente da incerteza.`,
    `TERMINAR EPISÓDIO`,
  ]

  // PRÓXIMO PARÁGRAFO
  function nextParagraph() {

    if (currentText < story.length - 1) {
      setCurrentText(currentText + 1)
    }
  }

  // ESCOLHER MESTRE
  function chooseMaster(master: string) {

    setChosenMaster(master)

    const newAffection = affection + 10

    setAffection(newAffection)

    const updatedSaves = saves.map((save: any) => {

      if (save.id === currentSaveId) {
        return {
          ...save,
          affection: newAffection,
          chosenMaster: master,
          finishedEp1: true,
        }
      }

      return save
    })

    localStorage.setItem(
      "whiskerSaves",
      JSON.stringify(updatedSaves)
    )
  }

  // BACKGROUND
  let currentBackground = "/burrowBackground.png"

  if (currentText >= 6) {
    currentBackground = "/backgroundCenter.png"
  }
  else if (currentText >= 4) {
    currentBackground = "/backgroundDay.png"
  }

  // PERSONAGEM ATUAL
  const isPrimi = story[currentText].includes("[primi]")
  const isBungo = story[currentText].includes("[bungo]")
  const isCarin = story[currentText].includes("[carin]")
  const isClove = story[currentText].includes("[clove]")

  // EXPRESSÃO
  let emotion = "neutral"

  if (story[currentText].includes("[happy]")) {
    emotion = "happy"
  }

  if (story[currentText].includes("[sad]")) {
    emotion = "sad"
  }

  if (story[currentText].includes("[angry]")) {
    emotion = "angry"
  }

  if (story[currentText].includes("[neutral]")) {
    emotion = "neutral"
  }

  // IMAGENS
  const primiImage = `/${emotion}Primi.png`
  const bungoImage = `/${emotion}Bungo.png`
  const carinImage = `/${emotion}Carin.png`
  const cloveImage = `/${emotion}Clove.png`

  // LIMPAR TAGS
  const cleanText = story[currentText]
    .replace("[primi]", "")
    .replace("[bungo]", "")
    .replace("[carin]", "")
    .replace("[clove]", "")
    .replace("[happy]", "")
    .replace("[sad]", "")
    .replace("[angry]", "")
    .replace("[neutral]", "")

  // LOVE METER
  function renderPlayerUI() {

    const affectionLevel = `${affection}%`

    return (
      <>
        <div className="player-ui">

          <div className="avatar-box">

            <img
              src={player?.fur}
              className="avatar-fur"
              alt=""
            />

            {player?.accessories.map((item: string) => (
              <img
                key={item}
                src={item}
                className={`avatar-layer ${item
                  .replace("/", "")
                  .replace(".png", "")}`}
                alt=""
              />
            ))}

          </div>

          <div className="player-name">
            {player?.name}
          </div>

        </div>

        <div className="affection-meter">
          <div
            className="affection-fill"
            style={{ height: affectionLevel }}
          />
        </div>
      </>
    )
  }

  // BOTÃO DAS ROTAS
  function renderRouteButton(route: string[]) {

    return (
      <button
        className="dialogue-option"
        onClick={() => {

          if (routeText === route.length - 1) {
            navigate("/episodes")
            return
          }

          setRouteText(routeText + 1)
        }}
      >
        {route[routeText]}
      </button>
    )
  }

  // ROTA BUNGO
  if (chosenMaster === "bungo") {

    return (
      <div className="game-screen">

        <img
          src="/backgroundCenter.png"
          className="background"
          alt=""
        />

        <img
          src="/happyBungo.png"
          className="bungo"
          alt=""
        />

        {renderPlayerUI()}

        <div className="dialogue-box">
          {renderRouteButton(bungoRoute)}
        </div>

      </div>
    )
  }

  // ROTA PRIMI
  if (chosenMaster === "primi") {

    return (
      <div className="game-screen">

        <img
          src="/backgroundCenter.png"
          className="background"
          alt=""
        />

        <img
          src="/happyPrimi.png"
          className="primi"
          alt=""
        />

        {renderPlayerUI()}

        <div className="dialogue-box">
          {renderRouteButton(primiRoute)}
        </div>

      </div>
    )
  }

  // ROTA CARIN
  if (chosenMaster === "carin") {

    return (
      <div className="game-screen">

        <img
          src="/backgroundCenter.png"
          className="background"
          alt=""
        />

        <img
          src="/happyCarin.png"
          className="carin"
          alt=""
        />

        {renderPlayerUI()}

        <div className="dialogue-box">
          {renderRouteButton(carinRoute)}
        </div>

      </div>
    )
  }

  // ROTA CLOVE
  if (chosenMaster === "clove") {

    return (
      <div className="game-screen">

        <img
          src="/backgroundCenter.png"
          className="background"
          alt=""
        />

        <img
          src="/happyClove.png"
          className="clove"
          alt=""
        />

        {renderPlayerUI()}

        <div className="dialogue-box">
          {renderRouteButton(cloveRoute)}
        </div>

      </div>
    )
  }

  return (
    <div className="game-screen">

      {/* BACKGROUND */}
      <img
        src={currentBackground}
        className="background"
        alt=""
      />

      {/* PRIMI */}
      {isPrimi && (
        <img
          src={primiImage}
          className="primi"
          alt="Primi"
        />
      )}

      {/* BUNGO */}
      {isBungo && (
        <img
          src={bungoImage}
          className="bungo"
          alt="Bungo"
        />
      )}

      {/* CARIN */}
      {isCarin && (
        <img
          src={carinImage}
          className="carin"
          alt="Carin"
        />
      )}

      {/* CLOVE */}
      {isClove && (
        <img
          src={cloveImage}
          className="clove"
          alt="Clove"
        />
      )}

      {renderPlayerUI()}

      {/* TEXTO */}
      <div className="dialogue-box">

        {currentText < story.length - 1 && (

          <button
            className="dialogue-option"
            onClick={nextParagraph}
          >
            {cleanText}
          </button>

        )}

        {/* ESCOLHAS */}
        {currentText === story.length - 1 && (

          <div className="master-options">

            <button
              className="dialogue-option"
              onClick={() => chooseMaster("primi")}
            >
              Escolher Primi
            </button>

            <button
              className="dialogue-option"
              onClick={() => chooseMaster("bungo")}
            >
              Escolher Bungo
            </button>

            <button
              className="dialogue-option"
              onClick={() => chooseMaster("carin")}
            >
              Escolher Carin
            </button>

            <button
              className="dialogue-option"
              onClick={() => chooseMaster("clove")}
            >
              Escolher Clove
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default Ep1