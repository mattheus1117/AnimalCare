import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import DoacaoPopup from "../components/Doacao/Doacao";
import PerfilPopup from '../components/PerfilPopup';

import { useAuth } from '../components/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

import "../css/login.css"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [doacaoVisivel, setDoacaoVisivel] = React.useState(false);
    const [perfilVisivel, setPerfilVisivel] = React.useState(false);

    const { login } = useAuth();

    async function handleUserLogin(event: React.FormEvent) {
        event.preventDefault();
        try {
            const response = await api.post("/loginCustomer", { email, password });
            console.log("Ok!");

            login(response.data);

            navigate("/"); //TODO: fazer o usuario voltar da pagina que estava
        } catch (errCustomer) {
            try {
                const response = await api.post("/loginOng", { email, password });
                console.log("Ok!");

                login(response.data);

                navigate("/"); //TODO: fazer o usuario voltar da pagina que estava
            } catch (error: any) {
                console.error("Erro no login", error);

                if (error.response && error.response.status === 401) {
                    // Erro de autenticação (usuário/senha incorretos)
                    alert("Gmail ou senha incorretos. Verifique e tente novamente.");
                } else {
                    // Outros erros (ex: servidor indisponível, erro interno, etc.)
                    alert("Ocorreu um erro durante o login. Tente novamente mais tarde.");
                }
            }

        }
    }

    return (
        <>
            <Header
                onChatClick={() => setChatVisivel((v) => !v)}
                onDoacaoClick={() => setDoacaoVisivel((v) => !v)}
                onPerfilClick={() => setPerfilVisivel((v) => !v)}
            />

            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="titleLogin">
                    Boas-vindas ao AnimalCare
                </h1>
                <div className="bg-gray-300 px-10 py-8 m-4 rounded-2xl shadow-lg w-full max-w-sm space-y-4">
                    <div className="login-box">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Entrar</h2>
                        <form onSubmit={handleUserLogin}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">E-mail ou CPF</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full px-10 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div className="flex justify-end mb-4">
                                <a href="#" className="text-sm text-yellow-500 hover:underline">Esqueci minha senha</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors mb-4 cursor-pointer"
                            >
                                Login
                            </button>
                            <div className="flex justify-center">
                                <Link
                                    to="/create-account"
                                    className="text-sm text-yellow-500 hover:underline cursor-pointer"
                                >
                                    Crie uma conta
                                </Link>
                            </div>
                        </form>
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