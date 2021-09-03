import React, { useState, useEffect } from 'react';

import Modal from './Modal';
import Button from '../Button';

import GraphCircular from '../GraphCircular';

import api from '../../../service/api'

import { DesktopModalContainer, ModalContainerGraphs, ModalContainerInfos,
        ContainerBox, ContainerObjectives, ContainerValues, HourGraphics,
        CostCenters } from './ModalPopup.styles';

interface BaseModalWrapperProps {
    numeroDoProjeto: number;
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
    };

    ccPagantes : [{
        centroDeCusto: {
            id: number;
            responsavel: {
              numero_cracha: number;
              nome: string;
              cpf: string;
            };
            nome: string;
        },
        percentual: number;
        valor: number;
    }];

    despesas : [{
        nome: string;
        esforco: number;
        valor: number;
    }];

    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible, numeroDoProjeto}) => {
    
    const [project, setProject] = useState<CardContent>();

    useEffect(() => {
        api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProject(response.data);
        }
    ))}, [numeroDoProjeto]);

    if (!isModalVisible) {
        return null
    }

    return (
        <Modal onBackdropClick={onBackdropClick} >
            <DesktopModalContainer>
                <span onClick={onBackdropClick} />
                <ModalContainerInfos>
                        <h1>{project ? project.infoprojetoDTO.titulo : ""}</h1>
                    <ContainerBox>
                        <p>{project ? project.infoprojetoDTO.numeroDoProjeto : ""} - Seção ABC</p>
                        <h3>ATA N°07/2020</h3>
                    </ContainerBox>
                    <ContainerBox>
                        <div>
                            <h1>Data de início:</h1><h2>{project ? project.infoprojetoDTO.data_de_inicio : ""}</h2>
                        </div>
                        <div>
                            <h1>Data de finalização:</h1><h2>{project ? project.infoprojetoDTO.data_de_termino : ""}</h2>
                        </div>
                    </ContainerBox>
                    <ContainerBox>
                    <Button text={'Dashboard'} tipo={"PopUpDashBoard"} rota={"dashboard"} numeroProjeto={project ? project.infoprojetoDTO.numeroDoProjeto: 0}/>
                        <label htmlFor="ata">ATA_CVPD_07_2020</label>
                        <input type="file" id="ata"/>
                    </ContainerBox>
                    <ContainerObjectives>
                        <h1>Descrição:</h1>
                        <h2>{project ? project.infoprojetoDTO.descricao : ""}
                        </h2>
                    </ContainerObjectives>
                    <CostCenters>
                        <div className="tableHeader">
                            <h2>Despesa (Desembolso)</h2>
                            <h2>Valor(R$)</h2>
                            <h2>CC Pagante</h2>
                        </div>
                        <ul className="scroller sc1">
                            <li>
                                <h2>Desenvolvimento Externo das integrações ...</h2>
                                <h2>5.000.000,00</h2>
                                <h3>20168060</h3>
                            </li>
                        </ul>
                    </CostCenters>
                </ModalContainerInfos>
                <ModalContainerGraphs>
                    <ContainerValues>
                        <div>
                            <h1>Horas esperadas:</h1><h2>{project ? project.valoresTotaisDTO.valorTotalEsforco : ""}</h2>
                        </div>
                        <div>
                            <h1>Horas trabalhadas:</h1><h2>60 Horas</h2>
                        </div>
                    </ContainerValues>
                    <HourGraphics>
                        <GraphCircular valor={120} total={600} tipo={"%"} />
                    </HourGraphics>
                    <ContainerValues>
                        <div>
                            <h1>Valor do projeto:</h1><h2>R$ {project ? project.valoresTotaisDTO.valorTotalCcPagantes +
                              project.valoresTotaisDTO.valorTotalDespesas : ""}</h2>
                        </div>
                        <div>
                            <h1>Valor consumido:</h1><h2>R$ 5.000,00</h2>
                        </div>
                        <div>
                            <h1>Valor desembolsado:</h1><h2>R$ 5.000,00</h2>
                        </div>
                        <div>
                            <h1>Saldo:</h1><h2>R$ 10.000,00</h2>
                        </div>
                    </ContainerValues>
                      <Button text={'Detalhes'} tipo={'PopUp'} rota={"details"} numeroProjeto={project ? project.infoprojetoDTO.numeroDoProjeto: 0}/>
                </ModalContainerGraphs>
            </DesktopModalContainer>
        </Modal>
    );
}

export default BaseModalWrapper;