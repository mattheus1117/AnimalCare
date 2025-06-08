import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chat from "../../components/Chat/Chat";
import DoacaoPopup from "../../components/Doacao/Doacao"

export const Dica06 = () => {
  const [chatVisivel, setChatVisivel] = React.useState(false);
  const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

  return <>
    <Header
      onChatClick={() => setChatVisivel((v) => !v)}
      onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
    />
    <h1>Dica 06</h1>
    <br />
    <br />
    <br /> Dica 06
    <br />
    <br />
    <Footer />

    {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
  </>
}