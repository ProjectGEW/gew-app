import React from 'react';

import api from '../../../../service/api';

import { Container, PopUp } from './styles';

import { TiDelete } from 'react-icons/ti';

interface PopupProjetosConsultorProps {
    projetos: number[];
    consultor: number;
}

const PopupProjetosConsultor: React.FC<PopupProjetosConsultorProps> = ({consultor, projetos}) => {

    function desalocar(numero: number, consultor: number) {
        api.delete(`projetos/desalocar/${numero}/${consultor}`);
    }

    return (
        <Container>
            <PopUp>
                {
                    projetos ? projetos.map((projeto, index) => (
                        <div key={index}>
                            <h1>{projeto}</h1>
                            <TiDelete onClick={() => desalocar(projeto, consultor)}/>
                        </div>
                    )) : ''
                }
            </PopUp>
        </Container>
    );
}

export default PopupProjetosConsultor;