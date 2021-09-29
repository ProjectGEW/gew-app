import React, { useEffect, useState } from 'react';

import api from '../../../service/api';
import analisaValor from '../../../utils/analisaValor';

import Modal from '../CardPopUp/Modal';

import { Container, PopUp, Title, Graph, Scroll, Bar, Value } from './styles';

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
    ccPagantes: [{
        secao: {
            responsavel: {
                valor_hora: number;
            }
        }   
    }]
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
        }
    ))}, [projetos]);

    const totalCcPagantes = [projetos.length], totalDespesas = [projetos.length];
    const totalValorHoraFuncionario = [projetos.length], totalHorasApontadas = [projetos.length];

    const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;

    for(var x = 0; x < projetos.length; x++) {
        totalCcPagantes[x] = projetos.map((projetos) => projetos.valoresTotaisDTO.valorTotalCcPagantes)[x];
        totalDespesas[x] = projetos.map((projetos) => projetos.valoresTotaisDTO.valorTotalDespesas)[x];
        totalValorHoraFuncionario[x] = projetos.map((projetos, index) => projetos.ccPagantes[index].secao.responsavel.valor_hora)[x];
        totalHorasApontadas[x] = projetos.map((projetos) => projetos.infoprojetoDTO.horas_apontadas)[x];
    }

    const valorUtilizado = totalHorasApontadas.reduce(reducer) * totalValorHoraFuncionario.reduce(reducer);
    const porcentagemUtilizada = (valorUtilizado / totalCcPagantes.reduce(reducer)) * 100;
    const valorDisponivel = totalCcPagantes.reduce(reducer) - valorUtilizado;

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
                        {projetos ? projetos.map((projeto) => 
                            <div className="projeto">
                                <p>{projeto.infoprojetoDTO.titulo}</p>
                                <p>{analisaValor(projeto.infoprojetoDTO.horas_apontadas * totalValorHoraFuncionario.reduce(reducer))}</p>
                                <p>00%</p>
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