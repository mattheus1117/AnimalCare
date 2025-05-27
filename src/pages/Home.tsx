import React from 'react';
import { AnimaisParaAdotar } from '.././AnimaisParaAdotar';
import ".././style.css"

import Footer from '../components/Footer'
import Header from '../components/Header'
import Card from '../components/Card';
import Chat from '../components/Chat/Chat';
import AnimalPopup from '../components/AnimalPopup/AnimalPopup';

interface Animal {
    imagem: string;
    nome: string;
    estado: string;
    cidade: string;
    peso: string;
    sexo: string;
    idade: string;
    especie: string;
    raca: string;
    porte: string;
    descricao: string;
}

export const Home = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [animalSelecionado, setAnimalSelecionado] = React.useState<Animal | null>(null);

    return <>
       <Header onChatClick={() => setChatVisivel((v) => !v)} />
        <div className="card-container">
            {AnimaisParaAdotar.map((animal, index) => (
                <Card key={index} {...animal} onClick={() => setAnimalSelecionado(animal)} />
            ))}
        </div>
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {animalSelecionado && (<AnimalPopup animal={animalSelecionado} onClose={() => setAnimalSelecionado(null)}/>)}
    </>
}