import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../service/api";

interface AuthState{
    jwt: string;
    usuario: object;
}

interface SingInCredentials {
    email: string;
    senha: string;
}

interface AuthContextData {
    usuario: object;
    singIn(credentials: SingInCredentials): Promise<void>;
    singOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("Token");
        const usuario = localStorage.getItem("User");

        if(jwt && usuario){
            return { jwt, usuario: JSON.parse(usuario)};
        }
        return {} as AuthState;
    });

    const singIn = useCallback(async ({ email, senha }) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        const { jwt, usuario } = respose.data;

        localStorage.setItem("Token", jwt);
        localStorage.setItem("User", JSON.stringify(usuario));
        setData({ jwt, usuario });
    }, []);

    const singOut = useCallback(() => {
        localStorage.removeItem("Token");
        localStorage.removeItem("User");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ usuario: data.usuario, singIn, singOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used withing an AuthProvider')
    }

    return context;
}