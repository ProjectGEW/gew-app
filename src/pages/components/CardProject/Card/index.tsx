import React, { useState, useEffect } from "react";

import BaseModalWrapper from '../../../components/CardPopUp/baseModalWrapper';
import api from '../../../../service/api';

import { AiOutlineClockCircle } from "react-icons/ai";

import { Card, CardStatus, CardBox, BoxLeft, BoxRight, Progress, Value } from './styles';

import formatStatus from "../../../../utils/formatStatus";
import analisaValor from "../../../../utils/analisaValor";

import intl from 'react-intl-universal';

const locales = {
    'pt-BR': require('../../../../language/pt-BR.json'),
    'en-US': require('../../../../language/en-US.json'),
    'es': require('../../../../language/es.json'),
    'fr-FR': require('../../../../language/fr-FR.json'),
};

interface CardProps {
    numeroDoProjeto: number;
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
        secao: string;
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const CardProject: React.FC<CardProps> = ({numeroDoProjeto}) => {
    const [language] = useState(() => {
        let languageStorage = localStorage.getItem('Language');

        if(languageStorage) {
            let languageObject = JSON.parse(languageStorage);
            return languageObject;
        } 
    });

    intl.init({
        currentLocale: language.code,
        locales
    });

    const [project, setProject] = useState<CardContent>();
    const [status, setStatus] = useState('');
    
    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
                setProject(response.data);
                setStatus(response.data.infoprojetoDTO.status);
      }))

    }, [numeroDoProjeto]);
    
    
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [popUp, setPopUp] = useState<JSX.Element>();

    const toggleModal = () => {
        setPopUp(
            <BaseModalWrapper 
                isModalVisible={isModalVisible} 
                onBackdropClick={toggleModal} 
                numeroDoProjeto={project ? project.infoprojetoDTO.numeroDoProjeto: 0} 
            />
        );
        setIsModalVisible(!isModalVisible);
    }

    function calcularPorcentagem(count: number) {
        const total = project ? project.valoresTotaisDTO.valorTotalEsforco : 0;
        const porcentagem = (count / total) * 100;

        return Math.floor(porcentagem);
    }

    return (
        <>
        { project ?
        <Card key={project?.infoprojetoDTO.id} onClick={toggleModal}>
            {popUp ? popUp : null}
            <CardStatus statusColor={status}/>
            <CardBox>
                <BoxLeft>
                    <div>
                        <p>{project ? project.infoprojetoDTO.numeroDoProjeto : "00000000"} - {project ? project.infoprojetoDTO.secao : "ABC"}</p>
                        <h1>{project ? project.infoprojetoDTO.titulo : ""}</h1>
                    </div>
                    <div>
                        <p><strong>{intl.get('card_projetos.saldo_um')}</strong>{analisaValor(project ? project.valoresTotaisDTO.valorTotalDespesas : 0)}</p>
                        <p><strong>{intl.get('card_projetos.saldo_dois')}</strong>{analisaValor(50000)}</p>
                    </div>
                    <div>
                        <p>{intl.get('card_projetos.data_um')} {project ? project.infoprojetoDTO.data_de_inicio : "00/00/0000"}</p>
                        <p>{intl.get('card_projetos.data_dois')} {project ? project.infoprojetoDTO.data_de_termino : "00/00/0000"}</p>
                    </div>
                </BoxLeft>
                <BoxRight>
                    <div>
                        <p>{intl.get('card_projetos.status')} <strong>{formatStatus(project ? project.infoprojetoDTO.status : '')}
                        </strong></p>
                    </div>
                    <div>
                        {project ? project.infoprojetoDTO.status !== "CONCLUIDO" ?
                            <>
                            <p><strong>{intl.get('card_projetos.horas')}:</strong> <AiOutlineClockCircle size={15} /> 
                                {project.valoresTotaisDTO.valorTotalEsforco} {intl.get('card_projetos.horas')}
                            </p>
                            <p><strong>{intl.get('card_projetos.apontadas')}:</strong> <AiOutlineClockCircle size={15} /> 
                                {project.infoprojetoDTO.horas_apontadas} {intl.get('card_projetos.horas')}
                            </p>
                            <Progress>
                                <Value value={calcularPorcentagem(project ? project.infoprojetoDTO.horas_apontadas : 0)} />
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
        : ''}
        </>
    );
}

export default CardProject;