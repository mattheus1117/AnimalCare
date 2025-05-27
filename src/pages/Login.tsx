import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { Link } from "react-router-dom";

export const Login = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />
        
        <div className="p-8">
            <h2>Acesse sua conta</h2>
            <input type="text" placeholder="Email ou CPF"/>
            <input type="password" placeholder="Digite sua senha"/>
            <Link to="/">Esqueci minha senha</Link>
            <button>Entrar</button>
        </div>

        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
}