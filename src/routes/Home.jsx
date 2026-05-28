import { useNavigate } from "react-router-dom"
import { logout } from "../services/auth"

const Home = () => {

    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()

        try {
            await logout()
            window.location.reload()
            navigate('/login', { replace: true })
        } catch (err) {
            console.error('Logout failed', err)
        }
    }

    return (
        <main className="home-main">
            <button onClick={handleLogout}>Sair</button>
        </main>
    )
}

export default Home
