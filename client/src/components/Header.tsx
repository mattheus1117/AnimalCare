import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext';

import ".././css/style.css"
import ".././css/Header.css"

interface NavbarProps {
    onChatClick: () => void;
    onDoacaoClick: () => void;
}

export default function Navbar({ onChatClick, onDoacaoClick }: NavbarProps) {
    const { isAuthenticated } = useAuth();
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

                { isAuthenticated ? (
                    <Link to='/perfil' className="Perfil">
                        Perfil
                    </Link>
                ) : (
                    <Link to='/login' className="Entrar">
                        Entrar
                    </Link>
                )}
            </div>
        </nav>
    );
}
