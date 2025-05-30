import React, { useEffect } from 'react';
//import { AnimaisParaAdotar } from '.././AnimaisParaAdotar';
import ".././style.css"
import { api } from '../services/api'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import Card from '../components/Card';
import AnimalPopup from '../components/AnimalPopup/AnimalPopup';

interface Animal {
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    weight?: number;
    location?: string;
    description?: string;
}

// {AnimaisParaAdotar.map((animal, index) => (
//     <Card key={index} {...animal} onClick={() => setAnimalSelecionado(animal)} />
// ))}

export const Home = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [animalSelecionado, setAnimalSelecionado] = React.useState<Animal | null>(null);
    const [animals, setAnimals] = React.useState<Animal[]>([]);

    useEffect(() => {
        loadAnimals();
    }, []);

    async function loadAnimals() {
        const response = await api.get("/animals");
        setAnimals(response.data);
    }

    return <>
       <Header onChatClick={() => setChatVisivel((v) => !v)} />
        <div className="card-container">

            {animals.map( (animal)=> (
                <Card animal={animal} onClick={() => setAnimalSelecionado(animal)} />
            ))}

        </div>
        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {animalSelecionado && (<AnimalPopup animal={animalSelecionado} onClose={() => setAnimalSelecionado(null)}/>)}
    </>
}