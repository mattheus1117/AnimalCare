import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat.tsx";
import AnimalPopup from "../components/AnimalPopup/AnimalPopup.tsx";

export const Login = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [animalSelecionado, setAnimalSelecionado] = React.useState(null);

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />
            <h1>LOGIN</h1>
            <br/>
            <br/>
            <br/>Espaço placeholder
            <br/>
            <br/>
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {animalSelecionado && (<AnimalPopup animal={animalSelecionado} onClose={() => setAnimalSelecionado(null)}/>)}
    </>
}