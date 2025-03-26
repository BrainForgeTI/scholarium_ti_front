import { Route, Routes } from "react-router"
import { HomePage } from "./routes/Home/HomePage"
import { Registro } from "./routes/Registro/RegistroPage"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />,
      <Route path="/registro" element={<Registro/>} />
    </Routes>
  )
}

export default App
