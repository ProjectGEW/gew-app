import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../service/api";

interface AuthState {
  jwt: string;
  usuario: object;
  nome?: string;
}

interface SingInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  usuario: object;
  signIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem("Token");
    const usuario = localStorage.getItem("User");
    const nome = localStorage.getItem("User:nome");

    if (jwt && usuario && nome) {
      return { jwt, usuario: JSON.parse(usuario), nome };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post("authenticate", {
      email,
      senha,
    });

    const { jwt, usuario, nome } = response.data;

    localStorage.setItem("Token", jwt);
    localStorage.setItem("User", JSON.stringify(usuario));
    localStorage.setItem("User:nome", nome);

    setData({ jwt, usuario, nome });
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: data.usuario, signIn: signIn, }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used withing an AuthProvider')
  }

  return context;
}