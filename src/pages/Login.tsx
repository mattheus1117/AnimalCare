import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { Link } from "react-router-dom";

export const Login = () => {
    const [chatVisivel, setChatVisivel] = React.useState(false);

    const [showCreateAccount, setShowCreateAccount] = React.useState(false);

    const handleShowCreateAccount = () => {
        setShowCreateAccount(true);
    };

    const handleBackToLogin = () => {
        setShowCreateAccount(false);
    };
    
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
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">E-mail ou CPF</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    placeholder="********"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div className="flex justify-end mb-4">
                                <a href="#" className="text-sm text-indigo-500 hover:underline">Esqueci minha senha</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors mb-4 cursor-pointer"
                            >
                                Login
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