import { Route, Routes } from "react-router"
import { HomePage } from "./routes/Home/HomePage"
import { SignUpPage } from "./routes/SignUp/SignUpPage"
import { SignInPage } from "./routes/SignIn/SignInPage"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />,
      <Route path="/signup" element={<SignUpPage />} />,
      <Route path="/signin" element={<SignInPage />}/>
    </Routes>
  )
}

export default App
