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

  function buscarCargo(email: string) {
    //api.get(`funcionarios/cargo/${email}`).then((response) => {
      //if (response.data === 1) {
        localStorage.setItem('Cargo', 'GZ4_7WPQgajvmSlKlRgn8A')
      // }
      // if (response.data === 2) {
      //   localStorage.setItem('Cargo', 'fmb8xNYF02BPXsGJohcOkw')
      // }
      // if (response.data === 3) {
      //   localStorage.setItem('Cargo', 'aIj5vqAY-nXFQC0DLJUrxA')
      // }
      // if (response.data === 4) {
      //   api.get(`funcionarios/cracha/${email}`).then((response) => {
      //     localStorage.setItem('Cracha', response.data);
      //   });
      //   localStorage.setItem('Cargo', 'V_mJKGFmvh7XtkEVhOCgTw')
      // }
    //});
  }

  const signIn = useCallback(async ({ email, senha }) => {
    buscarCargo(email);
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