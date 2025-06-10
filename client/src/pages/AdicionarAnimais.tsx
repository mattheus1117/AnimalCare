import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";

import ".././css/style.css"
import ".././css/AdicionarAnimais.css"

export const Contato = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    return (
        <>
            <Header
                onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
            />


            {/* Aqui voce escreve o codigo, E sim todo o resto é obrigatorio para funcionar kkkk
            */}


            <Footer />
            {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
            {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        </>
    );
};