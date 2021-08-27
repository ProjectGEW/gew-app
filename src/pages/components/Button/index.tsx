import React from "react";

import { Container } from "./style";

interface buttonProps {
    text: string;
    rota?: string;
}

const Button: React.FC<buttonProps> = ({text, rota}) => {
    
    function route() {
        return window.location.href = 'http://localhost:3000/'+ rota 
    }

    return (
        <>
            <Container><button onClick={route}>{text}</button></Container>
        </>
    );
 };

export default Button;