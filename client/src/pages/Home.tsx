import React, { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";

import { useAuth } from '../components/AuthContext';
import { Link } from 'react-router-dom';

import ".././css/Dicas.css"

export const Home = () => {
    const { getWithProactiveAuth } = useAuth();
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    useEffect(() => {
        getWithProactiveAuth("/animals");
    }, []);

    return <>
        <Header
            onChatClick={() => setChatVisivel((v) => !v)}
            onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
        />

        <div className="card-container">
            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-1" className="card-button">Leia mais</Link>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Caramelo.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-2" className="card-button">Leia mais</Link>

                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Laranjinha.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-3" className="card-button">Leia mais</Link>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Foguete.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-4" className="card-button">Leia mais</Link>

                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Gato.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-5" className="card-button">Leia mais</Link>

                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Max.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <Link to="/dica-6" className="card-button">Leia mais</Link>

                </div>
            </div>
        </div>

         <Link to="/AdicionarAnimais" className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 z-50"
        >+ Adicionar Animal</Link>

        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
    </>
}