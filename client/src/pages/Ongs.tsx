import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";

export const Ongs = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    return <>
        <Header
            onChatClick={() => setChatVisivel((v) => !v)}
            onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
        />
        <h1>ONGs</h1>
        <br />
        <br />
        <br />Espaço placeholder
        <br />
        <br />
        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
    </>
}