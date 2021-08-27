import React, { useState, useEffect } from "react";
import { useRouteMatch } from 'react-router-dom';
//import Modal from 'react-native-modal';
import BaseModalWrapper from '../../../components/CardPopUp/baseModalWrapper';
import api from '../../../../service/api';

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Progress, Value } from './styles';

interface RepositoryParams {
    repository: string;
}

interface CardProps {
    id: number;
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
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const CardProject: React.FC<CardProps> = ({id}) => {

    const [project, setProject] = useState<CardContent>();

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
      api.get<CardContent>(`/projetos/${id}`).then((response => {
        setProject(response.data);
      }))

    }, [params.repository]);

    // {project.map(project => ())}

    
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }


    return (
        <>
            <Card onClick={toggleModal}>
            <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
                <CardStatus statusColor={project ? project.infoprojetoDTO.status : "NAO_INICIADO"}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>{project ? project.infoprojetoDTO.numeroDoProjeto : "00000000"} - Seção ABC</p>
                            <h1>WEC - IMPLATAÇÃO DE EDI CLIENTE XYZ</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                        <div>
                            <p>De: 20/02/2020</p>
                            <p>Até: 22/05/2020</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <p>Status: <strong>Atrasado</strong></p>
                        </div>
                        <div>
                            {project ? project.infoprojetoDTO.status != "CONCLUIDO" ?
                                <>
                                    <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 120 Horas</p>
                                    <p><strong>Apontadas:</strong> <AiOutlineClockCircle size={15} /> 60 Horas</p>
                                    <Progress>
                                        <Value />
                                    </Progress>
                                </>
                                :
                                ''
                                :
                                ''
                            }
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        </>
    );
}

export default CardProject;