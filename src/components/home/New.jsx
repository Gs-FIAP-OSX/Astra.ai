import { useUser } from "../../hooks/useUser"
import icon from '../../assets/svg/icon-osx.svg'
import BarChat from "./BarChat"
import { useCallback, useEffect } from "react"
import { useChat } from "../../hooks/useChat"
import { useNavigate } from "react-router-dom"

const New = () => {

    const navigate = useNavigate()
    const { user } = useUser()

    const getFirstName = () => {
        return (user?.profile?.name || '')
            .trim()
            .split(/\s+/)
            .filter(Boolean)[0] || '';
    }

    const welcomes = [
        `${getFirstName()} está de volta.`,
        `De volta, ${getFirstName()}?`,
        `Bem-vindo de volta, ${getFirstName()}.`,
        `Pi Pi Pi Bwummm.`,
        `Reentrada confirmada, ${getFirstName()}.`,
        `${getFirstName()}, órbita retomada.`,
        `Retorno suave, ${getFirstName()}.`,
        `${getFirstName()}, trajetória restaurada.`,
        `Você voltou, ${getFirstName()}.`,
        `Pronto de novo, ${getFirstName()}?`,
        `${getFirstName()}, sinal restabelecido.`,
        `Bem-vindo, ${getFirstName()}.`,
        `De volta ao fluxo, ${getFirstName()}.`,
        `Chega! me demito.`,
        `${getFirstName()}, missão continua.`,
        `Retomando, ${getFirstName()}.`,
        `Tudo certo, ${getFirstName()}?`,
    ]

    const welcome = welcomes[new Date().getHours() % welcomes.length]

    const {
        isLoading,
        sendMessage,
        stop,
        reset
    } = useChat()

    useEffect(() => {
        reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const handler = (e) => {
            const newId = e.detail
            if (newId) {
                navigate(`/chat/${newId}`, { replace: true })
            }
        }

        window.addEventListener('chat:created', handler)
        return () => window.removeEventListener('chat:created', handler)
    }, [navigate])


    const handleSend = useCallback((payload) => {
        sendMessage(payload)
    }, [sendMessage])

    const handleStop = useCallback(() => {
        stop()
    }, [stop])

    return (
        <main className="new-main">
            <section className="new-welcome">
                <img src={icon} />
                <h1 style={{ '--chars': welcome.length }} className="typing">{welcome}</h1>
            </section>
            <section className="new-input">
                <BarChat
                    onSend={handleSend}
                    onStop={handleStop}
                    isLoading={isLoading}
                />
            </section>
        </main>
    )
}

export default New
