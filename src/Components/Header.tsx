export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-left">
                <a href="/" className="nome-site">Animal Care</a>
            </div>
            <div className="nav-center">
                <a href="/Doacao">Doação</a>
                <a href="/ONGeProtetores">ONGs/Protetores</a>
                <a href="/Chat">Chat</a>
            </div>
            <div className="nav-right">
                <a href="/Adotar" className="Qadotar">Quero Adotar</a>
                <a href="/Entrar" className="Entrar">Entrar</a>
            </div>
        </nav>
    );
}
