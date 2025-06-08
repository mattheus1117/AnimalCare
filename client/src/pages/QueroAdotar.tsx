import React, { useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import Card from '../components/Card';
import AnimalPopup from '../components/AnimalPopup/AnimalPopup';
import DoacaoPopup from "../components/Doacao/Doacao";

import ".././style.css"

interface Animal {
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    status: string;
    weight?: number;
    location?: string;
    description?: string;
}

export const QueroAdotar = () => {
    const [animalSelecionado, setAnimalSelecionado] = React.useState<Animal | null>(null);
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    const [animals, setAnimals] = React.useState<Animal[]>([]);

    const { getWithProactiveAuth } = useAuth();

    useEffect(() => {
        loadAnimals();
    }, []);

    async function loadAnimals() {
        //const response = await api.get("/animals");
        const response = await getWithProactiveAuth("/animals");
        setAnimals(response.data);
    }

    return <>
        <Header
            onChatClick={() => setChatVisivel((v) => !v)}
            onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
        />
        <div className="card-container">

            {animals.map((animal) => (
                <Card animal={animal} onClick={() => setAnimalSelecionado(animal)} />
            ))}

        </div>
        <Footer />

        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
        {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        {animalSelecionado && (<AnimalPopup animal={animalSelecionado} onClose={() => setAnimalSelecionado(null)} />)}
    </>
}
