import React from "react";
import { string } from "yup";

import { Container } from "./style";

interface buttonProps {
    text: string;
    rota: string;
}

const Button: React.FC<buttonProps> = ({text, rota}) => {
    
    function onClick() {
        return window.location.href = 'http://www.'+ rota +'.com.br'
    }

    return (
        <>
            <Container><button onClick={onClick}>{text}</button></Container>
        </>
    );
 };

export default Button;