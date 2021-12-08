import React from "react";
import { Container } from './styles';

interface containerProps {
    tipo?: string;
}


const ContainerChild: React.FC<containerProps> = ({tipo}) => {
    
    return (
            <Container tipo={tipo}></Container>
    );
 };

export default ContainerChild;