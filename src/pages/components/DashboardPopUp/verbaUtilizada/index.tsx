import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';

import Modal from '../../CardPopUp/Modal';

import { Container, PopUp, Title, Graph, Scroll, Bar, Value } from '../styles';

interface BaseModalWrapperProps {
    valor: number;
    isModalVisible: boolean;
    onBackdropClick: () => void;
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
    const [countVerbaTotalPorProjeto, setCountVerbaTotalPorProjeto] = useState();
    const [countVerbaTotal, setCountVerbaTotal] = useState();

    useEffect(() => {
        api.get<CardContent[]>(`/projetos`).then((response => {
            setProjetos(response.data);
        }
    ))}, [projetos]);

    useEffect(() => {
        api.get(`/projetos/count/verba/` + 182251).then((response => {
            setCountVerbaTotalPorProjeto(response.data);
        }
    ))}, [projetos]);

    useEffect(() => {
        api.get(`/projetos/count/verba/total`).then((response => {
            setCountVerbaTotal(response.data);
        }
    ))}, [projetos]);

    if(!isModalVisible) {
        return null;
    }

    const porcentagemPorProjeto = (Number(countVerbaTotalPorProjeto) / Number(countVerbaTotal)) * 100;
    
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <Container>
                <PopUp>
                    <Title>
                        <h1>PROJETOS</h1>
                        <span onClick={() => onBackdropClick} />
                    </Title>
                    <Scroll>
                        {projetos ? projetos.map((projeto) => 
                            <div className="projeto">
                                <p>{projeto.infoprojetoDTO.titulo.length <= 25 ? projeto.infoprojetoDTO.titulo : "..."}</p>
                                <p>{countVerbaTotalPorProjeto ? analisaValor(Number(countVerbaTotalPorProjeto)) : 0}</p>
                                <p>{porcentagemPorProjeto}%</p>
                            </div>
                        ) : ''}
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