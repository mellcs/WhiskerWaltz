import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CharacterCreation.css"

function CharacterCreation() {

  const navigate = useNavigate()

  const furOptions = [
    { name: "Brown", file: "/BrownFur.png", color: "#7b5636" },
    { name: "Grey", file: "/GreyFur.png", color: "#8f8f8f" },
    { name: "Siamese", file: "/SiameseFur.png", color: "#d8b78f" },
    { name: "Spotted", file: "/SpottedFur.png", color: "#e8d8b2" },
    { name: "White", file: "/WhiteFur.png", color: "#f4f4f4" },
  ]

  const accessoryOptions = [
    { name: "Mochila", file: "/backpack.png" },
    { name: "Bandana", file: "/bandana.png" },
    { name: "Cinto", file: "/belt.png" },
    { name: "Coroa Floral", file: "/flowerCrown.png" },
    { name: "Colar", file: "/necklace.png" },
    { name: "Bolsa", file: "/purse.png" },
    { name: "Chapéu Cogumelo", file: "/shroomHat.png" },
    { name: "Colete", file: "/vest.png" },
    { name: "Cachecol", file: "/woolScarf.png" },
  ]

  const [tab, setTab] = useState("personality")

  const [name, setName] = useState("")
  const [pronoun, setPronoun] = useState("Elu/Delu")
  const [fur, setFur] = useState("/GreyFur.png")

  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([])

  function toggleAccessory(item: string) {
    if (selectedAccessories.includes(item)) {
      setSelectedAccessories(
        selectedAccessories.filter((acc) => acc !== item)
      )
    } else {
      setSelectedAccessories([
        ...selectedAccessories,
        item
      ])
    }
  }

  function startGame() {

  const playerData = {
    name,
    pronoun,
    fur,
    accessories: selectedAccessories,
  }

  const oldSaves = JSON.parse(
    localStorage.getItem("whiskerSaves") || "[]"
  )

  const newSave = {
    id: Date.now(),

    player: playerData,

    affection: 0,

    chosenMaster: "",

    finishedEp1: false,
  }

  const updatedSaves = [
    ...oldSaves,
    newSave
  ]

  localStorage.setItem(
    "whiskerSaves",
    JSON.stringify(updatedSaves)
  )

  localStorage.setItem(
    "currentSave",
    JSON.stringify(newSave.id)
  )

  navigate("/episodes")
}

  return (
    <div className="creator-screen">
      <div className="creator-box">

        {/* LEFT */}
        <div className="creator-left">
          <div className="mouse-preview">

            <img
              src={fur}
              className="rat-image"
              alt="Ratinho"
            />

            {selectedAccessories.map((item) => (
              <img
                key={item}
                src={item}
                className={`rat-layer ${item
                  .replace("/", "")
                  .replace(".png", "")}`}
                alt=""
              />
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="creator-right">

          {/* TABS */}
          <div className="tabs">

            <button
              className={
                tab === "personality"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => setTab("personality")}
            >
              Personalidade
            </button>

            <button
              className={
                tab === "fur"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => setTab("fur")}
            >
              Pelagem
            </button>

            <button
              className={
                tab === "accessories"
                  ? "tab active-tab"
                  : "tab"
              }
              onClick={() => setTab("accessories")}
            >
              Acessórios
            </button>

          </div>

          {/* PERSONALIDADE */}
          {tab === "personality" && (
            <>
              <label>Nome</label>

              <input
                className="top-name-input"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <label>Pronome</label>

              <select
                value={pronoun}
                onChange={(e) =>
                  setPronoun(e.target.value)
                }
              >
                <option>Elu/Delu</option>
                <option>Ela/Dela</option>
                <option>Ele/Dele</option>
              </select>

              <label>Quer filhotes?</label>

              <select>
                <option>Sim</option>
                <option>Não</option>
                <option>Talvez</option>
              </select>
            </>
          )}

          {/* PELAGEM */}
          {tab === "fur" && (
            <>
              <label>Escolha a Pelagem</label>

              <div className="color-grid">

                {furOptions.map((option) => (
                  <button
                    key={option.name}
                    className="color-btn"
                    style={{
                      backgroundColor: option.color
                    }}
                    onClick={() =>
                      setFur(option.file)
                    }
                  />
                ))}

              </div>
            </>
          )}

          {/* ACESSÓRIOS */}
          {tab === "accessories" && (
            <>
              <label>
                Escolha seus acessórios
              </label>

              <div className="item-grid">

                {accessoryOptions.map((item) => (
                  <button
                    key={item.file}
                    className={
                      selectedAccessories.includes(
                        item.file
                      )
                        ? "item-btn selected-item"
                        : "item-btn"
                    }
                    onClick={() =>
                      toggleAccessory(item.file)
                    }
                  >
                    <img
                      src={item.file}
                      alt={item.name}
                    />

                    <small>{item.name}</small>
                  </button>
                ))}

              </div>
            </>
          )}

          <button
            className="start-btn"
            onClick={startGame}
          >
            Começar Jornada
          </button>

        </div>
      </div>
    </div>
  )
}

export default CharacterCreation