import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./routes/Login"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
