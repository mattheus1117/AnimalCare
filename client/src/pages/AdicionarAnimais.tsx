import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";
import PerfilPopup from '../components/PerfilPopup';

import "../css/AdicionarAnimais.css";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AdicionarAnimais = () => {
    const navigate = useNavigate();
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);
    const [perfilVisivel, setPerfilVisivel] = React.useState(false);

    const [petFormData, setPetFormData] = React.useState({
        name: "",
        idUser: "",
        age: "",
        gender: "",
        size: "",
        kind: "",
        animalPicture: "",
        race: "",
        weight: "",
        location: "",
        description: "",
    });

    function handlePetInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setPetFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    async function handlePetSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData();

        formData.append("idUser", petFormData.idUser); // Assuming a default user ID for now
        formData.append("name", petFormData.name);
        formData.append("age", petFormData.age);
        formData.append("gender", petFormData.gender);
        formData.append("size", petFormData.size);
        formData.append("kind", petFormData.kind);
        formData.append("race", petFormData.race);
        formData.append("weight", petFormData.weight);
        formData.append("location", petFormData.location);
        formData.append("description", petFormData.description);

        const animalPictureFile = document.getElementById("animalPicture") as HTMLInputElement;
        if (animalPictureFile.files && animalPictureFile.files[0]) {
            formData.append("animalPicture", animalPictureFile.files[0]);
        }

         try {
            const response = await api.post("/animal", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao cadastrar novo animal", error);
        }

        // try {
        //     const response = await api.post("/animal", petFormData);
        //     console.log(response.data);
        //     navigate("/");
        // } catch (error) {
        //     console.error("Erro ao cadastrar novo animal", error);
        // }
    }

    return (
        <>
            <Header
                onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
                onPerfilClick={() => setPerfilVisivel((v) => !v)}
            />

            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="titleAnimal">
                    Cadastrar Animal
                </h1>
                
                <div className="createAnimal-box">
                   <div className="box">
                    <form onSubmit={handlePetSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="name">Nome do animal *</label>
                            <input type="text" id="name" value={petFormData.name} onChange={handlePetInputChange}
                                placeholder="Nome"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="kind">Espécie *</label>
                            <input type="text" id="kind" value={petFormData.kind} onChange={handlePetInputChange}
                                placeholder="Ex: Cachorro, Gato, Pássaro"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="age">Idade *</label>
                            <input type="text" id="age" value={petFormData.age} onChange={handlePetInputChange}
                                placeholder="Ex: 2 anos"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="race">Raça *</label>
                            <input type="text" id="race" value={petFormData.race} onChange={handlePetInputChange}
                                placeholder="Raça do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="gender">Sexo *</label>
                            <input type="text" id="gender" value={petFormData.gender} onChange={handlePetInputChange}
                                placeholder="Sexo do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="weight">Peso *</label>
                            <input type="text" id="weight" value={petFormData.weight} onChange={handlePetInputChange}
                                placeholder="Peso do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="size">Porte *</label>
                            <input type="text" id="size" value={petFormData.size} onChange={handlePetInputChange}
                                placeholder="Ex: Pequeno, Médio, Grande"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="location">Local *</label>
                            <input type="text" id="location" value={petFormData.location} onChange={handlePetInputChange}
                                placeholder="Cidade, Estado"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="idUser">Id do Usuario *</label>
                            <input type="text" id="idUser" value={petFormData.idUser} onChange={handlePetInputChange}
                                placeholder="Id do usuário que está cadastrando o animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="animalPicture">Link da Imagem *</label>
                            <input type="file" id="animalPicture" value={petFormData.animalPicture} onChange={handlePetInputChange}
                                placeholder="Link da imagem do animal em conversão picture64"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="description">Sobre o Pet *</label>
                            <input type="text" id="description" value={petFormData.description} onChange={handlePetInputChange}
                                placeholder="Dócil, brincalhão, gosta de passear..."
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-6 hover:bg-yellow-600 transition-colors cursor-pointer"
                            >
                                Cadastrar Animal
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center mt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/home")}
                            className="text-sm text-indigo-500 hover:underline cursor-pointer"
                        >
                            Voltar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            

            <Footer />

            {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
            {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
            {perfilVisivel && <PerfilPopup onClose={() => setPerfilVisivel(false)} />}
        </>
    );
};
