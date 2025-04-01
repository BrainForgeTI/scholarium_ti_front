import { Route, Routes } from "react-router"
import { HomePage } from "./routes/Home/HomePage"
import { SignUpPage } from "./routes/SignUp/SignUpPage"
import { AdventurePage } from "./routes/Adventure/AdventurePage"
import { AdventureAuth } from "./context/adventure/AdventureAuth"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />,
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/adventure/:id" element={<AdventureAuth><AdventurePage /></AdventureAuth>} />
    </Routes>
  )
}

export default App
