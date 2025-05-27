import React from "react";
import Header from ".././components/Header.tsx";
import Footer from ".././components/Footer.tsx";
import Chat from ".././components/Chat/Chat.tsx";

export const Adotar = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />
            <h1>Adotar</h1>
            <br/>
            <br/>
            <br/>Espaço placeholder
            <br/>
            <br/>
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
}