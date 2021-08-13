import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../../../service/api';

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Progress, Value } from './styles';

interface CardStatus {
    statusColor: string;
}

interface RepositoryParams {
    repository: string;
}

interface CardContent {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        titulo: string;
        data_de_inicio: string;
        data_de_termino: string;
        status: string;
    };
    ccPagantes: [
        {
            valor: number;
        }
    ];
    despesas: [
        {
            esforco: number;
        }
    ]        


}

const CardProject: React.FC<CardStatus> = ({statusColor}) => {

    const [project, setProject] = useState<CardContent[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
      api.get(`/projetos`).then((response => {
        setProject(response.data);
      }))

    }, [params.repository]);

    return (
        <>
        {project.map(project => (
            <Card>
                <CardStatus statusColor={statusColor}/>
                <CardBox>
                    <BoxLeft>
                        <div>
                            <p>{project.infoprojetoDTO.numeroDoProjeto} - Seção ABC</p>
                            <h1>{project.infoprojetoDTO.titulo}</h1>
                        </div>
                        <div>
                            <p><strong>Saldo previsto:</strong> R$ 50.000,00</p>
                            <p><strong>Saldo restante:</strong> R$ 50.000,00</p>
                        </div>
                        <div>
                            <p>De: {project.infoprojetoDTO.data_de_inicio}</p>
                            <p>Até: {project.infoprojetoDTO.data_de_termino}</p>
                        </div>
                    </BoxLeft>
                    <BoxRight>
                        <div>
                            <p>Status: <strong>Atrasado</strong></p>
                        </div>
                        <div>
                            <p><strong>Horas:</strong> <AiOutlineClockCircle size={15} /> 120 Horas</p>
                            <p><strong>Apontadas:</strong> <AiOutlineClockCircle size={15} /> 60 Horas</p>
                            <Progress>
                                <Value />
                            </Progress>
                        </div>
                    </BoxRight>
                </CardBox>
            </Card>
        ))}
        </>
    );
}

export default CardProject;