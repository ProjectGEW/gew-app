import React, { useState, useEffect } from "react";
//import { useRouteMatch } from 'react-router-dom';
//import Modal from 'react-native-modal';
import BaseModalWrapper from '../../../components/CardPopUp/baseModalWrapper';
import api from '../../../../service/api';

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Progress, Value } from './styles';

/*interface RepositoryParams {
    repository: string;
}*/

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
        horas_apontadas: number;
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const CardProject: React.FC<CardProps> = ({id}) => {
    const [project, setProject] = useState<CardContent>();
    const [status, setStatus] = useState('');

    console.log(status);
    //const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
      api.get<CardContent>(`/projetos/${id}`).then((response => {
        setProject(response.data);
        setStatus(response.data.infoprojetoDTO.status);
      }))

    }, [id]);
    
    // {project.map(project => ())}

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    return (
        <>
        <Card onClick={toggleModal}>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} id={id} />
            <CardStatus statusColor={project ? project.infoprojetoDTO.status : "NAO_INICIADO"}/>
            <CardBox>
                <BoxLeft>
                    <div>
                        <p>{project ? project.infoprojetoDTO.numeroDoProjeto : "00000000"} - Seção ABC</p>
                        <h1>{project ? project.infoprojetoDTO.titulo : ""}</h1>
                    </div>
                    <div>
                        <p><strong>Saldo previsto:</strong> R$ {project ? project.valoresTotaisDTO.valorTotalDespesas : 0}</p>
                        <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                    </div>
                    <div>
                        <p>De: {project ? project.infoprojetoDTO.data_de_inicio : "00/00/0000"}</p>
                        <p>Até: {project ? project.infoprojetoDTO.data_de_termino : "00/00/0000"}</p>
                    </div>
                </BoxLeft>
                <BoxRight>
                    <div>
                        <p>Status: <strong>{/*project ? status.split("_").length > 1 ? 
                            status.split("_")[0][0].toUpperCase() + status.split("_")[0].slice(1).toLowerCase() + " " +  status.split("_")[1].toLowerCase() : 
                            status.split("_")[0][0].toUpperCase() +  status.split("_")[0].slice(1, -1).toLowerCase() : "Não iniciado"} */}
                        </strong></p>
                    </div>
                    <div>
                        {project ? project.infoprojetoDTO.status !== "CONCLUIDO" ?
                            <>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 
                                {project.valoresTotaisDTO.valorTotalEsforco} Horas
                            </p>
                            <p><strong>Apontadas:</strong> <AiOutlineClockCircle size={15} /> 
                                {project.infoprojetoDTO.horas_apontadas} Horas
                            </p>
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