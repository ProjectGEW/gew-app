import React from 'react';
import Modal from './Modal';
import { DesktopModalContainer, ModalContainerGraphs, ModalContainerInfos,
        ContainerBox, ContainerObjectives, ContainerValues, HourGraphics } from './ModalPopup.styles';

interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if (!isModalVisible) {
        return null
    }
    return (<Modal onBackdropClick={onBackdropClick} >
                <DesktopModalContainer>
                    <button onClick={onBackdropClick} />
                    <ModalContainerInfos>
                        <span>WEC - IMPLANTAÇÃO DE EDI CLIENTE XYZ</span>
                        <ContainerBox>
                            <a>1000025562 - Seção ABC</a>
                            <h3>ATA N°07/2020</h3>
                        </ContainerBox>
                        <ContainerBox>
                            <div>
                                <h1>Data de início:</h1><h2>02/02/2021</h2>
                            </div>
                            <label htmlFor="ata">ATA_CVPD_07_2020</label>
                            <input type="file" id="ata"/>
                        </ContainerBox>
                        <ContainerBox>
                            <div>
                                <h1>Data de finalização:</h1><h2>02/05/2021</h2>
                            </div>
                            <label htmlFor="ata">DASHBOARD</label>
                            <input type="file" id="ata"/>
                        </ContainerBox>
                        <ContainerObjectives>
                            <h1>Objetivos:</h1>
                            <h2>Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV),
                                envio da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do
                                cliente para automatizar o envio de pedidos e atualização do próprio sistema através
                                do EDI (Eletronic Data Interchange). O Cliente já implementou este sistema nos 
                                principais fornecedores.
                            </h2>
                        </ContainerObjectives>
                        <ContainerValues>
                            <div>
                                <h1>Valor do projeto:</h1><h2>R$ 15.000,00</h2>
                            </div>
                            <div>
                                <h1>Valor consumido:</h1><h2>R$ 5.000,00</h2>
                            </div>
                            <div>
                                <h1>Saldo:</h1><h2>R$ 10.000,00</h2>
                            </div>
                        </ContainerValues>
                    </ModalContainerInfos>
                    <ModalContainerGraphs>
                        <ContainerValues>
                            <div>
                                <h1>Horas esperadas:</h1><h2>120 Horas</h2>
                            </div>
                            <div>
                                <h1>Horas trabalhadas:</h1><h2>60 Horas</h2>
                            </div>
                        </ContainerValues>
                        <HourGraphics>

                        </HourGraphics>
                    </ModalContainerGraphs>
                </DesktopModalContainer>
            </Modal>
        );
}

export default BaseModalWrapper;