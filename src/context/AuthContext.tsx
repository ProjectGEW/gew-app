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
        const jwt = localStorage.getItem("gew:token");
        const usuario = localStorage.getItem("gew:user");

        if(jwt && usuario){
            return { jwt, usuario: JSON.parse(usuario)};
        }

        //console.log(data);

        return {} as AuthState;
    });

    const singIn = useCallback(async ({ email, senha }) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        const { jwt, usuario } = respose.data;

        localStorage.setItem("gew:token", jwt);
        localStorage.setItem("gew:user", JSON.stringify(usuario));
        setData({ jwt, usuario });
    }, []);

    const singOut = useCallback(() => {
        localStorage.removeItem("gew:token");
        localStorage.removeItem("gew:user");

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