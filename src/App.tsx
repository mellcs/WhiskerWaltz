import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Menu from "./pages/Menu"
import CharacterCreation from "./pages/CharacterCreation"
import Episodes from "./pages/Episodes"
import Ep1 from "./pages/Ep1"
import LoadGame from "./pages/LoadGame"

import Assistant from "./components/Assistant"

function App() {

  return (
    <BrowserRouter>

      <Assistant />

      <Routes>

        <Route
          path="/"
          element={<Menu />}
        />

        <Route
          path="/character"
          element={<CharacterCreation />}
        />

        <Route
          path="/episodes"
          element={<Episodes />}
        />

        <Route
          path="/ep1"
          element={<Ep1 />}
        />

        <Route
          path="/load"
          element={<LoadGame />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App