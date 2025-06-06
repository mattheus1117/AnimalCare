import React, { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { useAuth } from '../components/AuthContext';

export const Home = () => {
    const { getWithProactiveAuth } = useAuth();
    const [chatVisivel, setChatVisivel] = React.useState(false);

    useEffect(() => {
        getWithProactiveAuth("/animals");
    }, []);

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