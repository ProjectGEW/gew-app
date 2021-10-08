import React, { useEffect, useState } from 'react';

import api from '../../../../service/api';
import analisaValor from '../../../../utils/analisaValor';

import ListaProjetos from '../listaProjetos';

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
    const [countVerbaTotal, setCountVerbaTotal] = useState();

    /*useEffect(() => {
        window.onload = async function handleProjetos() {
            const response = await api.get<CardContent[]>(`projetos`);
            const data = response.data;
            setProjetos(data);

            const responseVerbaTotal = await api.get(`projetos/count/verba/total`);
            const dataVerbaTotal = responseVerbaTotal.data;
            setCountVerbaTotal(dataVerbaTotal);
        }
        //handleProjetos();
    }, [projetos, countVerbaTotal]); */

    useEffect(() => {
        api.get<CardContent[]>(`projetos`).then((response => {
              setProjetos(response.data);
        }));
  
        api.get(`projetos/count/verba/total`).then((response => {
            setCountVerbaTotal(response.data)
        })); 
    }, []);

    //alert(isModalVisible);

    if(!isModalVisible) {
        return null;
    }
    
    return (
        <Modal onBackdropClick={onBackdropClick}>
            <Container>
                <PopUp>
                    <Title>
                        <h1>PROJETOS</h1>
                        <span onClick={() => isModalVisible = false} />
                    </Title>
                    <Scroll>
                        {projetos ? projetos.map((projeto, index) => 
                            <ListaProjetos key={index} 
                                numeroDoProjeto={projeto.infoprojetoDTO.numeroDoProjeto} 
                                tituloDoProjeto={projeto.infoprojetoDTO.titulo}
                            />
                        ) : 
                        <div className="projeto">
                            <p>Sem projetos</p>
                            <p>analisaValor(0)</p>
                            <p>0%</p>
                        </div>}
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