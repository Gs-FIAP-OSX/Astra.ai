import { useUser } from "../../hooks/useUser"
import icon from '../../assets/svg/icon-osx.svg'
import BarChat from "./BarChat"

const New = () => {

    const { user } = useUser()

    const getFirstName = () => {
        return (user?.profile?.name || '')
            .trim()
            .split(/\s+/)
            .filter(Boolean)[0] || '';
    }

    return (
        <main className="new-main">
            <section className="new-welcome">
                <img src={icon} />
                <h1>De volta ao trabalho, {getFirstName()}?</h1>
            </section>
            <section className="new-input">
                <BarChat />
            </section>
        </main>
    )
}

export default New
