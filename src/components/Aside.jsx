import '../css/aside.css'
import { useEffect, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { ChevronUpDown, Code, Edit, Folder, Search, Sidebar, Trash2 } from '@geist-ui/icons'

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
            <section className='aside-content'>
                <button className='aside-btn'><Edit className='icon' size={19} /> <p>Novo bate-papo</p> <span>Shift + a</span></button>
                <button className='aside-btn'><Search className='icon' size={19} /> <p>Procurar</p> <span>Ctrl + p</span></button>
                <div className='aside-content-scrool'>
                    <button className='aside-btn'><Folder className='icon' size={19} /> <p>Arquivos</p></button>
                    <button className='aside-btn bloq'><Code className='icon' size={19} /> <p>Código</p> <h3>Indisponível</h3></button>

                    <h2>Recentes</h2>
                    <section className='aside-grid-chats'>
                        <article className='aside-card-chat'>
                            <h1>Novo Chat</h1>
                            <div>
                                <button><Trash2 size={14} /></button>
                                <button><Edit size={14} /></button>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
            <footer className='aside-profile'>
                <div className='aside-img-profile'>
                    <img src="https://avatars.githubusercontent.com/u/182553526?v=4" />
                </div>
                <section className='aside-profile-content'>
                    <div>
                        <h1>Leonardo Silva</h1>
                        <p>BASIC</p>
                    </div>
                    <section className='aside-btn-profile'>
                        <ChevronUpDown size={14} />
                    </section>
                </section>
            </footer>
        </aside>
    )
}

export default Aside
