import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import ProtectedRoute from "./routes/ProtectedRoute"
import { ConsoleBanner } from "./hooks/ConsoleBanner"
import New from "./components/home/New"
import Chat from "./components/home/Chat"
import Recents from "./routes/Recents"
import Error from "./routes/Error"

const App = () => {

  ConsoleBanner()


  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/home" element={<Navigate to='/' />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to='new' />} />
            <Route path="new" element={<New />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="recents" element={<Recents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
