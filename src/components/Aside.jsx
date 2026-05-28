import '../css/aside.css'
import logo from '../assets/svg/logo.svg'
import { Sidebar } from '@geist-ui/icons'

const Aside = () => {
    
    return (
        <aside className="aside-main">
            <header className="aside-header">
                <img src={logo} alt="logo ASTRA" />
                <button><Sidebar size={17} /> </button>
            </header>
        </aside>
    )
}

export default Aside
