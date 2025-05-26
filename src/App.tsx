import { useState } from 'react';
import { AnimaisParaAdotar } from './AnimaisParaAdotar';
import './App.css'
import "./style.css"

import Footer from './Components/Footer'
import Navbar from './Components/Header'
import Card from './Components/Card';
import Chat from './Components/Chat';
import AnimalPopup from './Components/AnimalPopup';

function App() {

  const [chatVisivel, setChatVisivel] = useState(false);
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  return (
    <>
      <Navbar onChatClick={() => setChatVisivel((v) => !v)} />
      <div className="card-container">
        {AnimaisParaAdotar.map((animal, index) => (
          <Card key={index} {...animal} onClick={() => setAnimalSelecionado(animal)} />
        ))}
      </div>
      <Footer />
      {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
      {animalSelecionado && (<AnimalPopup animal={animalSelecionado} onClose={() => setAnimalSelecionado(null)}/>)}
    </>
  );
}

export default App;
