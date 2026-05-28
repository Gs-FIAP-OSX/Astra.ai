import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
