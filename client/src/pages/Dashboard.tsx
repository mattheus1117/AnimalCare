import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useAuth } from '../components/AuthContext';

interface DecodedToken {
  id: string;
  name: string;
  email: string;
  // outros campos, se necessário
}

interface UserData {
  name: string;
  email: string;
  plan: string;
  activities: string[];
}

export const Dashboard = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    const { getWithProactiveAuth } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        const decoded = jwtDecode<DecodedToken>(token);

      // Buscar dados do usuário pelo ID
    const response = getWithProactiveAuth("/customer")
        .then((response) => setUserData(response.data))
        .catch((error) => console.error("Erro ao buscar usuário:", error));
    } catch (err) {
      console.error("Token inválido:", err);
    }
  }, []);

  if (!userData) return <div>Carregando dados...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Olá, {userData.name}!</h1>
      <p>Email: {userData.email}</p>
      <p>Plano atual: {userData.plan}</p>

      <h2 className="text-xl mt-4">Atividades Recentes:</h2>
      <ul className="list-disc ml-5">
        {userData.activities.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </div>
  );
}