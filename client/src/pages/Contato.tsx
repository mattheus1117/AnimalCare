import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";

import ".././teste.css"

export const Contato = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />

        <div className="contato">
            <h1>Contato</h1>
            <p>Teste
            </p>
            <p>Teste
            </p>
            <p>Teste
            </p>
            <p>Teste
            </p>
            <p>Teste
            </p>
        </div>
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
}