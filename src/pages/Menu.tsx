import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function Menu() {

  const navigate = useNavigate()

  return (
    <div className="screen">

      <motion.img
        src="/placa.png"
        alt="Whisker Waltz"
        className="placa"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <div className="menu">

        {/* CARREGAR JOGO */}
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/load")}
        >
          <img src="/botao1.png" alt="Carregar Jogo" />
        </motion.button>

        {/* NOVO JOGO */}
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/character")}
        >
          <img src="/botao2.png" alt="Novo Jogo" />
        </motion.button>

      </div>
    </div>
  )
}

export default Menu