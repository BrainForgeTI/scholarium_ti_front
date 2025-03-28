import { Route, Routes } from "react-router"
import { HomePage } from "./routes/Home/HomePage"
import { SignUpPage } from "./routes/Registro/SignUpPage"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />,
      <Route path="/signup" element={<SignUpPage/>} />
    </Routes>
  )
}

export default App
