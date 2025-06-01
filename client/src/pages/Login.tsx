import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { Link } from "react-router-dom";
import { api } from '../services/api'

export const Login = () => {

    const [chatVisivel, setChatVisivel] = React.useState(false);
    const [showCreateAccount, setShowCreateAccount] = React.useState(false);

    const handleShowCreateAccount = () => {
        setShowCreateAccount(true);
    };

    const handleBackToLogin = () => {
        setShowCreateAccount(false);
    };

    const [loading, setLoading] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setSenha] = React.useState('');
    
    async function userLogin(event: React.FormEvent) {
        event.preventDefault(); // impede recarregar a página
        setLoading(true);

        console.log('Email:', email);
        console.log('Senha:', password);

        try {
            const response = await api.post("/loginCustomer", {
                email,
                password
            });
            console.log(response.data);

        } catch (error) {
            console.error('Erro ao logar:', error);
        } finally {
            setLoading(false);
        }
    }

    return <>
        <Header onChatClick={() => setChatVisivel((v) => !v)} />
        
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Boas-vindas ao AnimalCare
            </h1>
            <div className="bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-sm">
                {!showCreateAccount ? (
                    <>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Entrar</h2>
                        <form onSubmit={userLogin}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">E-mail ou CPF</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    value={password}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="********"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div className="flex justify-end mb-4">
                                <a href="#" className="text-sm text-indigo-500 hover:underline">Esqueci minha senha</a>
                            </div>
                            <button
                                type="submit"
                                className={`w-full flex items-center justify-center bg-indigo-500 text-white py-2 rounded-lg transition-colors mb-4 cursor-pointer ${
                                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'
                                }`}
                                disabled={loading}
                                >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 mr-2 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </button>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleShowCreateAccount}
                                    className="text-sm text-indigo-500 hover:underline cursor-pointer"
                                >
                                    Crie uma conta
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Crie sua conta!</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Digite seu CPF</label>
                                <input
                                    type="text"
                                    id="cpfcriar"
                                    placeholder="CPF"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full bg-white text-gray-800 py-2 rounded-full border border-gray-300 mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                Criar conta ONG
                            </button>
                            <button
                                type="button"
                                className="w-full bg-white text-gray-800 py-2 rounded-full border border-gray-300 mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                Criar conta Tutor
                            </button>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleBackToLogin}
                                    className="text-sm text-indigo-500 hover:underline cursor-pointer"
                                >
                                    Voltar para login
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>

        <Footer />
        {chatVisivel && <Chat onClose={() => setChatVisivel(false)} />}
    </>
}