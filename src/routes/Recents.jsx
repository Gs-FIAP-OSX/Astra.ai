import { Edit, Search, Trash2 } from "@geist-ui/icons"
import { Link } from "react-router-dom"

const Recents = () => {
    return (
        <main className="recents-main">
            <header className="recents-header">
                <h1>Conversas</h1>
                <div>
                    <button className="active">Novo bate-papo</button>
                </div>
            </header>
            <article className="recents-search">
                <Search size={18} />
                <input type="text" placeholder="Pesquisar conversa..." />
            </article>
            <section className="recents-grid-chats">

                <Link to='/chat/:id' className="recents-card-chat">
                    <div>
                        <h1>Dynamic badge API with multiple achievement types</h1>
                        <p>há 2 horas</p>
                    </div>
                    <span>
                        <button><Trash2 size={16} /></button>
                        <button><Edit size={16} /></button>
                    </span>
                </Link>

                <Link to='/chat/:id' className="recents-card-chat">
                    <div>
                        <h1>Documentação profissional da solução OSX</h1>
                        <p>há 3 dias</p>
                    </div>
                    <span>
                        <button><Trash2 size={16} /></button>
                        <button><Edit size={16} /></button>
                    </span>
                </Link>

                <Link to='/chat/:id' className="recents-card-chat">
                    <div>
                        <h1>Estrutura de pitch deck para plataforma de transcrição</h1>
                        <p>semana passada</p>
                    </div>
                    <span>
                        <button><Trash2 size={16} /></button>
                        <button><Edit size={16} /></button>
                    </span>
                </Link>
            </section>
        </main>
    )
}

export default Recents
