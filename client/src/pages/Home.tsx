import React, { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { useAuth } from '../components/AuthContext';
import DoacaoPopup from "../components/Doacao/Doacao";

import ".././dicas.css"

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
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>

            <div className="card">
                <div className="imagem">
                    <img src="AnimalCare/Images/Luna.jpg" alt="imagem" />
                </div>
                <div className="card-body">
                    <p>Dicas para ajudar os animais, Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="card-footer">
                    <button className="card-button">Mais informações</button>
                </div>
            </div>
        </div>


        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
    </>
}