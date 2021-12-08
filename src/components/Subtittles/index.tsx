import React from "react";
import { Subtittles } from './styles';

interface subtittleProps {
    text?: string;
    tipo?: string;
}


const Subtittle: React.FC<subtittleProps> = ({text, tipo}) => {
    return (
        <Subtittles tipo={tipo}>{text}</Subtittles>
    );
};

export default Subtittle;