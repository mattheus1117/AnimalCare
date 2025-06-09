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
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed itaque odit ullam dolores. Vel quaerat magni expedita, consequuntur, aspernatur maxime itaque autem sapiente porro natus deleniti tempora quos perspiciatis enim!
            Illum sed quibusdam cumque reprehenderit qui error magnam! Culpa excepturi, magnam provident id quibusdam assumenda, aspernatur repellat, dicta amet consectetur ex eum placeat. Ea labore cumque excepturi magni qui voluptas?
            Doloribus nam assumenda cum quas, ab neque sunt! Accusantium ipsam veniam perferendis laudantium aliquid molestiae beatae! Sit maxime quae rem similique. Dolores possimus ipsum numquam laborum tenetur eum dolorem sapiente.

        </p>
        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
    </>
}