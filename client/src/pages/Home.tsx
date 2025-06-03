import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";

export const Home = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />
        <h1>Dicas</h1>
        <br />
        <br />
        <br />Espaço placeholder
        <br />
        <br />
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
}