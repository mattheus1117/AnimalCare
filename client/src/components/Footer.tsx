import { Link } from 'react-router-dom';

import ".././css/style.css"
import ".././css/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span className="footer-title">Animal Care © 2025</span>
            </div>
            <div className="footer-center">
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/termos-de-uso">Termos de Uso</Link>
            </div>
            <div className="footer-right">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="mailto:contato@animalcare.com">E-mail</a>
            </div>
        </footer>
    );
}
