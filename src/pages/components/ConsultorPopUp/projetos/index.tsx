import React from 'react';

import { Container, PopUp } from './styles';

import { TiDelete } from 'react-icons/ti';

interface PopupProjetosConsultorProps {
    projetos: number[];
}

const PopupProjetosConsultor: React.FC<PopupProjetosConsultorProps> = ({projetos}) => {
    return (
        <Container>
            <PopUp>
                {
                    projetos ? projetos.map(projeto => (
                        <div>
                            <h1>{projeto}</h1>
                            <TiDelete onClick={() => alert("remover*")}/>
                        </div>
                    )) : ''
                }
            </PopUp>
        </Container>
    );
}

export default PopupProjetosConsultor;