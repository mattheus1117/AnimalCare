import { Link } from 'react-router-dom'

interface NavbarProps {
    onChatClick: () => void;
    onDoacaoClick: () => void;
}

export default function Navbar({ onChatClick, onDoacaoClick }: NavbarProps) {
    return (
        <nav className="nav h-24">
            <div className="nav-left">
                <Link to='/' className="nome-site">
                    Animal Care
                </Link>
            </div>

            <div className="nav-center">
                <button onClick={onDoacaoClick} className="doacao-btn">Doação</button>

                <Link to='/ongs'>
                    ONGs/Protetores
                </Link>

                <button onClick={onChatClick} className="chat-btn">Chat</button>
            </div>

            <div className="nav-right">
                <Link to='/adotar' className="Qadotar">
                    Quero Adotar
                </Link>
                <Link to='/login' className="Entrar">
                    Entrar
                </Link>
            </div>
        </nav>
    );
}
