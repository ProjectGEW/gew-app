import React from 'react';
import { Inputs, ContainerDesc, ContainerInfos, ContainerSection,
        ContainerTittles, Tittle, Container, ContainerDetails, Box,
        ContainerAppointments, ContainerGraphs, Graphic, Graphic2 } from './style';
import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';

const Details: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
            <MenuRight>
                <ContIcons></ContIcons>
            </MenuRight>
            <Container>
                <ContainerDetails>
                <ContainerSection>
                    <h1>10000024870 - Seção ABC</h1>
                </ContainerSection>
                <ContainerTittles>
                    <Tittle>WEN - LANÇAMENTO CUSTO DOC. VENDAS EM GARANTIAS</Tittle>
                    <Inputs>
                        <label htmlFor="ata">DASHBOARD</label>
                        <input type="file" id="ata"/>
                        <label htmlFor="ata">ATA_CVPD_07_2020</label>
                        <input type="file" id="ata"/>
                    </Inputs>
                </ContainerTittles>
                <ContainerInfos>
                    <ul>
                        <li>
                            <h1>NÚMERO:</h1><h2>165165165165</h2>
                        </li>
                        <li>
                            <h1>CC:</h1><h2>20111151</h2>
                        </li>
                        <li>
                            <h1>STATUS:</h1><h2>EM ANDAMENTO</h2>
                        </li>
                        <li>
                            <h1>DATA DE CRIAÇÃO:</h1><h2>01/08/2020</h2>
                        </li>
                    </ul>
                </ContainerInfos>
                <ContainerDesc>
                    <h1>Descrição:</h1>
                    <h2>Reduzir a atividade manual da equipe interna WEC na entrada de ordens de venda (OV), envio
                        da confirmação e aviso de remessa ao Cliente XYZ USA. Atender solicitação do cliente para
                        automatizar o envio de pedidos e atualização do próprio sistema através do EDI
                        (Eletronic Data Interchange). O Cliente já implementou este sistema nos principais fornecedores.
                    </h2>
                </ContainerDesc>
                <ContainerInfos>
                    <Box>
                        <h1>Solicitante / Seção Solicitante:</h1>
                        <h2>DIEGO CANVAS DE SOUZA - SEÇÃO ASSISTÊNCIA TÉCNICA</h2>
                    </Box>
                    <Box>
                        <h1>Responsável / Seção Responsável:</h1>
                        <h2>ANDRÉ CARLOS SILVA - INSIDE SALES DEPARTMENT</h2>
                    </Box>
                    <Box>
                        <h1>Aprovado Por:</h1>
                        <h2>LETÍCIA SCHIODINI DA CRIZ</h2>
                    </Box>
                </ContainerInfos>
                <span>Horas apontadas funcionários:</span>
                <ContainerAppointments>
                        <div className="tableHeader">
                            <h2>Funcionário</h2>
                            <h2>Horas Apontadas</h2>
                            <h2>Valor Hora</h2>
                            <h2>Valor Total</h2>
                        </div>
                        <ul className="scroller sc1">
                            <li>
                                <h3>Daiana dos Santos</h3>
                                <h3>100</h3>
                                <h3>R$ 50,00</h3>
                                <h3>R$ 5.000,00</h3>
                            </li>
                            <li>
                                <h3>Daiana dos Santos</h3>
                                <h3>100</h3>
                                <h3>R$ 50,00</h3>
                                <h3>R$ 5.000,00</h3>
                            </li>
                            <li>
                                <h3>Daiana dos Santos</h3>
                                <h3>100</h3>
                                <h3>R$ 50,00</h3>
                                <h3>R$ 5.000,00</h3>
                            </li>
                            <li>
                                <h3>Daiana dos Santos</h3>
                                <h3>100</h3>
                                <h3>R$ 50,00</h3>
                                <h3>R$ 5.000,00</h3>
                            </li>
                        </ul>
                </ContainerAppointments>
                <ContainerGraphs>
                    <Graphic>
                        <h1>Verba utilizada sobre o total orçado:</h1>
                    </Graphic>
                    <Graphic>
                        <h1>Horas das demandas sobre o total estabelecido:</h1>
                    </Graphic>
                </ContainerGraphs>
                <Graphic2>
                        <div></div>
                        <div></div>
                        <div className='graph'></div>
                </Graphic2>
                </ContainerDetails>
            </Container>
        </>
        );
};

export default Details;