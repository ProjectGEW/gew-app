import React, { createContext, useCallback, useState } from "react";
import api from "../service/api";

interface AuthState{
    jwt: string;
}

interface SingInCredentials {
    email: string;
    senha: string;
}

interface AuthContextData {
    singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("gew:token");

        if(jwt){
            return { jwt };
        }

        return {} as AuthState;
    });

    const singIn = useCallback(async ({ email, senha }) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        const { jwt } = respose.data;

        localStorage.setItem("gew:token", jwt);
        setData(jwt);
    }, []);

    return (
        <AuthContext.Provider value={{singIn}}>
            {children}
        </AuthContext.Provider>
    );
}