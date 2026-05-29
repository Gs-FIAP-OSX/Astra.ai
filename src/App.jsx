import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import ProtectedRoute from "./routes/ProtectedRoute"
import { ConsoleBanner } from "./hooks/ConsoleBanner"
import New from "./components/home/New"
import Chat from "./components/home/Chat"

const App = () => {

  ConsoleBanner()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/home" element={<Navigate to='/chat' />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/chat" element={<Home />} >
          <Route index element={<Navigate to='new' />} />
            <Route path="new" element={<New />} />
            <Route path=":id" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
