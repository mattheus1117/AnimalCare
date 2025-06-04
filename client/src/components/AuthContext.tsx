import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from 'jwt-decode';
import api, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string ) => void;
  logout: () => void;
  
  getWithProactiveAuth: <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
}

interface TokenPayload {
  exp: string;
  sub: string;
  role: 'customer' | 'ong';
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (accessToken: string) => {
    const decoded = jwtDecode<TokenPayload>(accessToken);

    localStorage.setItem("token", accessToken);
    localStorage.setItem('accessTokenExp', decoded.exp);
    localStorage.setItem('userRole', decoded.role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  function isTokenExpiringSoon(token: string): boolean {
    try {
      const decoded = jwtDecode<TokenPayload>(token);

      const now = Math.floor(Date.now() / 1000);

      const exp = parseInt(decoded.exp);

      return exp - now < 30;

    } catch (e) {
      return true;
    }
  }

  async function refreshTokenIfNeeded(): Promise<void> {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole'); // 'customer' ou 'ong'

    if (!token || isTokenExpiringSoon(token)) {
      const refreshUrl = userRole?.toLowerCase() === 'customer' ? '/refresh-customer' : '/refresh-ong';

      console.log(refreshUrl);

      const response = await api.post(refreshUrl, {}, {
        withCredentials: true
      });

      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
    }
  }

  async function getWithProactiveAuth<T = any>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {

    await refreshTokenIfNeeded();

    const accessToken = localStorage.getItem('accessToken');

    const authConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`
      },
      withCredentials: true // importante para enviar cookies se for necessário
    };

    // api url + caminho 
    return await api.get(`${import.meta.env.VITE_API_URL}${url}`, authConfig);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getWithProactiveAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};