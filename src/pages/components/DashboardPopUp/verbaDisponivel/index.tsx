import React from 'react';

import { Container, PopUp} from './styles';

//import '../../../Test/estiloPopup.css';

interface PopupVerbaDisponivelProps {
    valor: number;
    verba: string;
}

const PopupVerbaDisponivel: React.FC<PopupVerbaDisponivelProps> = ({ valor, verba }) => {
    return (
        <Container>
            <PopUp>
                {verba} ➜ {valor}%
            </PopUp>
        </Container>     
    );
}

export default PopupVerbaDisponivel;