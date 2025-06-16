import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AdicionarAnimais = () => {
    const navigate = useNavigate();
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    const [petFormData, setPetFormData] = React.useState({
        Name: "",
        old: "",
        sex: "",
        size: "",
        species: "",
        img: "",
        race: "",
        weight: "",
        location: "",
        about: "",
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setPetFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    async function handlePetSubmit(event: React.FormEvent) {
        event.preventDefault();
        try {
            const response = await api.post("/adicionarAnimais", petFormData);
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.error("Erro ao criar conta de ONG", error);
        }
    }

    return (
        <>
            <Header
                onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
            />

            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Cadastrar Animal
                </h1>

                <div className="bg-gray-300 p-12 m-8 rounded-2xl shadow-lg w-full max-w-5xl">
                    <form onSubmit={handlePetSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="Name">Nome do animal *</label>
                            <input type="text" id="Name" value={petFormData.Name} onChange={handleInputChange}
                                placeholder="Nome"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="species">Espécie *</label>
                            <input type="text" id="species" value={petFormData.species} onChange={handleInputChange}
                                placeholder="Ex: Cachorro, Gato, Pássaro"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="old">Idade *</label>
                            <input type="text" id="old" value={petFormData.old} onChange={handleInputChange}
                                placeholder="Ex: 2 anos"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="race">Raça *</label>
                            <input type="text" id="race" value={petFormData.race} onChange={handleInputChange}
                                placeholder="Raça do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="sex">Sexo *</label>
                            <input type="text" id="sex" value={petFormData.sex} onChange={handleInputChange}
                                placeholder="Sexo do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="weight">Peso *</label>
                            <input type="text" id="weight" value={petFormData.weight} onChange={handleInputChange}
                                placeholder="Peso do animal"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="size">Porte *</label>
                            <input type="text" id="size" value={petFormData.size} onChange={handleInputChange}
                                placeholder="Ex: Pequeno, Médio, Grande"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="location">Local *</label>
                            <input type="text" id="location" value={petFormData.location} onChange={handleInputChange}
                                placeholder="Cidade, Estado"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="img">Link da Imagem *</label>
                            <input type="text" id="img" value={petFormData.img} onChange={handleInputChange}
                                placeholder="Link da imagem do animal em conversão picture64"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="about">Sobre o Pet *</label>
                            <input type="text" id="about" value={petFormData.about} onChange={handleInputChange}
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

            <Footer />

            {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
            {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        </>
    );
};
