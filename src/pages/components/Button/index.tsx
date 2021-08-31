import React from "react";

import { Container } from "./style";

interface buttonProps {
    text?: string;
    rota?: string;
    tipo?: string;
    numeroProjeto?: number;
}

const Button: React.FC<buttonProps> = ({text, rota, tipo, numeroProjeto}) => {
    
    function route() {
        if(numeroProjeto != null) {
            return window.location.href = 'http://localhost:3000/'+ rota + '/' + numeroProjeto
        }
        
        return window.location.href = 'http://localhost:3000/'+ rota
    }
    return (
        <>
            <Container tipo={tipo}><button onClick={route}>{text}</button></Container>
        </>
    );
 };

export default Button;