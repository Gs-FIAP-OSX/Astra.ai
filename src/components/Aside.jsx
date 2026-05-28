import '../css/aside.css'
import { useEffect, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { Sidebar } from '@geist-ui/icons'

const Aside = () => {

    const [isOpen, setIsOpen] = useState(() => {
        return localStorage.getItem('aside_open') !== 'false'
    })

    useEffect(() => {
        const handleAsideToggle = () => {
            setIsOpen(localStorage.getItem('aside_open') !== 'false')
        }

        window.addEventListener('aside-toggle', handleAsideToggle)

        return () => {
            window.removeEventListener('aside-toggle', handleAsideToggle)
        }
    }, [])

    const handleToggleAside = () => {
        const newValue = !isOpen

        localStorage.setItem('aside_open', newValue.toString())

        window.dispatchEvent(new Event('aside-toggle'))
    }

    return (
        <aside className={`aside-main ${isOpen ? 'collapsed' : ''}`}>
            <header className="aside-header">
                <img src={logo} alt="logo ASTRA" />
                <button onClick={handleToggleAside}><Sidebar size={17} /> </button>
            </header>
        </aside>
    )
}

export default Aside
