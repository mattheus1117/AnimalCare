import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Header'
import Card from './Components/Card';
import "./style.css"
import { useState } from 'react';
import Chat from './Components/Chat';

function App() {

  const [chatVisivel, setChatVisivel] = useState(false);

  const animais = [
    { imagem: 'AnimalCare/public/Images/Gato.jpg', nome: 'Mimi', estado: 'SP', cidade: 'São Paulo' },
    { imagem: 'https://placekitten.com/301/200', nome: 'Rex', estado: 'RJ', cidade: 'Rio de Janeiro' },
    { imagem: 'https://placekitten.com/302/200', nome: 'Luna', estado: 'MG', cidade: 'Belo Horizonte' },
    { imagem: 'https://placekitten.com/303/200', nome: 'Bob', estado: 'PR', cidade: 'Curitiba' },
    { imagem: 'https://placekitten.com/304/200', nome: 'Toby', estado: 'RS', cidade: 'Porto Alegre' },
    { imagem: 'https://placekitten.com/300/200', nome: 'Mimi', estado: 'SP', cidade: 'São Paulo' },
    { imagem: 'https://placekitten.com/301/200', nome: 'Rex', estado: 'RJ', cidade: 'Rio de Janeiro' },
    { imagem: 'https://placekitten.com/302/200', nome: 'Luna', estado: 'MG', cidade: 'Belo Horizonte' },
    { imagem: 'https://placekitten.com/303/200', nome: 'Bob', estado: 'PR', cidade: 'Curitiba' },
    { imagem: 'https://placekitten.com/304/200', nome: 'Toby', estado: 'RS', cidade: 'Porto Alegre' },
  ];

  return (
    <>
      <Navbar onChatClick={() => setChatVisivel((v) => !v)} />
      <div className="card-container">
        {animais.map((animal, index) => (
          <Card key={index} {...animal} />
        ))}
      </div>
      <Footer />
      {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
  );
}

export default App;
