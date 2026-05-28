import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import ProtectedRoute from "./routes/ProtectedRoute"

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
