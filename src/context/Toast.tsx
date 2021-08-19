import React, { createContext, useState, useCallback, useContext } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../pages/components/CardPopUp';

export interface ToastMessage {
    id: string;
    type?: "success" | "error" | "info";
    title: string;
    description?: string;
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, "id">): void,
    removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<ToastMessage[]>([]);
    
    const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, "id">) => {
        const id = uuid();

        const toast = {
            id,
            type,
            title,
            description,
        }

        setMessage((state) => [...state, toast])
    }, []);

    const removeToast = useCallback((id: string) => {
        setMessage(state => state.filter(message => message.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer message={message}/>
        </ToastContext.Provider>
    );
};

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if(!context) {
        throw new Error("useToast must be used withing ToastProvider");
    }

    return context;
}

export { ToastProvider, useToast };