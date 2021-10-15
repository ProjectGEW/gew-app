import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';

import Modal from '../../CardPopUp/Modal';

import { Container, PopUp, Title, Graph, Scroll, Bar, Value } from '../styles';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    valor: number;
}

interface CardContent {
    infoprojetoDTO : {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        status: string;
        horas_apontadas: number;
    };
    ccPagantes : [{
        secao: {
            id: number;
            responsavel: {
              numero_cracha: number;
              nome: string;
              cpf: string;
              valor_hora: number;
            };
            nome: string;
        },
        percentual: number;
        valor: number;
    }];
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, valor}) => {
    const [projetos, setProjetos] = useState<CardContent[]>([]);

    useEffect(() => {
        api.get<CardContent[]>(`projetos`).then((response => {
              setProjetos(response.data);
        }));
    }, []);

    if (!isModalVisible) {
        return null
    }
        
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <Container>
                <PopUp>
                    <Title>
                        <h1>PROJETOS</h1>
                        <span onClick={onBackdropClick} />
                    </Title>
                    <Scroll>
                        {/*projetos ? projetos.map((projeto) => 
                            <div className="projeto">
                                <p>{projeto.infoprojetoDTO.titulo}</p>
                                <p>{analisaValor(projeto.infoprojetoDTO.horas_apontadas * 2)}</p>
                                <p>00%</p>
                            </div>
                        ) : ''*/}
                    </Scroll>
                    <Graph>
                        <Bar>
                            <Value valor={valor}></Value>
                        </Bar>
                    </Graph>
                </PopUp>
            </Container>
        </Modal>
    );
}

export default BaseModalWrapper;