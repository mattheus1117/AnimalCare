import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
    const navigate = useNavigate();
    const [showOngForm, setShowOngForm] = React.useState(false);
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);

    const [ongFormData, setOngFormData] = React.useState({
        corporateName: "",
        state: "",
        cnpj: "",
        zipcode: "",
        representative: "",
        city: "",
        contact: "",
        neighborhood: "",
        email: "",
        password: "",
        patio: "",
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setOngFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    function handleTutorClick() {
        console.log("Criar conta tutor clicado!");
    }

    function handleOngClick() {
        setShowOngForm(true);
    }

    function handleBack() {
        setShowOngForm(false);
    }

    async function handleOngSubmit(event: React.FormEvent) {
        event.preventDefault();

        try {
            const response = await api.post("/ong", ongFormData);
            console.log(response.data);
            // redireciona após sucesso
            navigate("/login");
        } catch (error) {
            console.error("Erro no login", error);
        }
    }

    return (
        <>
            <Header onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)} />


            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Criação de Conta
                </h1>

                {!showOngForm ? (
                    <div className="bg-gray-300 p-8 m-4 rounded-2xl shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Escolha o tipo de conta</h2>
                        <button
                            type="button"
                            onClick={handleTutorClick}
                            className="w-full bg-white text-gray-800 py-3 rounded-full border border-gray-300 mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            Criar conta Tutor
                        </button>
                        <button
                            type="button"
                            onClick={handleOngClick}
                            className="w-full bg-white text-gray-800 py-3 rounded-full border border-gray-300 mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            Criar conta ONG
                        </button>
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="text-sm text-indigo-500 hover:underline cursor-pointer"
                            >
                                Voltar para login
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-300 p-12 m-8 rounded-2xl shadow-lg w-full max-w-5xl">
                        <form onSubmit={handleOngSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="corporateName">Razão Social *</label>
                                <input type="text" id="corporateName" value={ongFormData.corporateName} onChange={handleInputChange}
                                    placeholder="Nome"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="state">Estado *</label>
                                <input type="text" id="state" value={ongFormData.state} onChange={handleInputChange}
                                    placeholder="Estado"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="cnpj">CNPJ *</label>
                                <input type="text" id="cnpj" value={ongFormData.cnpj} onChange={handleInputChange}
                                    placeholder="00.000.000/0000-00"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="zipcode">CEP *</label>
                                <input type="text" id="zipcode" value={ongFormData.zipcode} onChange={handleInputChange}
                                    placeholder="00000-000"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="representative">Representante *</label>
                                <input type="text" id="representative" value={ongFormData.representative} onChange={handleInputChange}
                                    placeholder="Nome do representante"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="city">Cidade *</label>
                                <input type="text" id="city" value={ongFormData.city} onChange={handleInputChange}
                                    placeholder="Cidade"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="contact">Contato *</label>
                                <input type="text" id="contact" value={ongFormData.contact} onChange={handleInputChange}
                                    placeholder="(00) 00000-0000"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="neighborhood">Bairro *</label>
                                <input type="text" id="neighborhood" value={ongFormData.neighborhood} onChange={handleInputChange}
                                    placeholder="Bairro"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2" htmlFor="email">E-mail *</label>
                                <input type="email" id="email" value={ongFormData.email} onChange={handleInputChange}
                                    placeholder="exemplo@exemplo.com"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2" htmlFor="password">Senha *</label>
                                <input type="password" id="password" value={ongFormData.password} onChange={handleInputChange}
                                    placeholder="********"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-700 mb-2" htmlFor="patio">Logradouro *</label>
                                <input type="text" id="patio" value={ongFormData.patio} onChange={handleInputChange}
                                    placeholder="Rua e número da casa"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-8 hover:bg-yellow-600 transition-colors cursor-pointer"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="text-sm text-indigo-500 hover:underline cursor-pointer"
                            >
                                Voltar para opções
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <Footer />

            {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
            {doacaoVisivel && <DoacaoPopup onClose={() => setDoacaoVisivel(false)} />}
        </>
    );
};