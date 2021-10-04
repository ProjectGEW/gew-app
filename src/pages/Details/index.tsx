import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Inputs, ContainerDesc, ContainerInfos, ContainerSection, ContainerTittles, Tittle, Container,
    ContainerDetails, Box, ContainerAppointments, ContainerGraphs, Graphic, Graphic2, Filtros, Top, Bottom,
    Graph, Left, Right, Square, Bar, Pack, Footer } from './style';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import api from '../../service/api'

import Button from '../components/Button';

import { ContIcons } from '../components/MenuRight/styles';
import GraphCircular from '../components/GraphCircular';

interface CardContent {
    ccPagantes: [
        centroDeCusto : {
            id: number;
            nome:  string;
            responsavel: {
                nome: String;
            }
        }
    ];

    infoprojetoDTO : {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        status: string;
        secao: string;
        horas_apontadas: number;
        responsavel: {
            nome: string;
        };
        solicitante: {
            nome: string;
        };
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

const Details: React.FC = () => {
    const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };
    
    const { id }: {id: string}  = useParams();
    const [project, setProject] = useState<CardContent>();
    const [ata, setAta] = useState<string>();

    useEffect(() => {
        api.get<CardContent>(`/projetos/${id ? id : null}`).then((response => {
          setProject(response.data);
        }))
    }, [id]);

    useEffect(() => {
        api.get<string>(`/files/${project ? project.infoprojetoDTO.id : 0}`).then((response) => {
            setAta(response.data);
        }
    )});

    const downloadFile = () => {
        window.open(`http://localhost:6868/files/download/${project ? project.infoprojetoDTO.id : 0}`);
    }

    return (
        <>
        {console.log(project)}
        <Navbar/>
        <MenuLeft/>
        <MenuRight>
            <ContIcons/>
        </MenuRight>
        <Container>
            <ContainerDetails>
                <ContainerSection>
                    <h1>{project ? project.infoprojetoDTO.numeroDoProjeto : ""} - {project ? project.infoprojetoDTO.secao : "Seção ABC"}</h1>
                </ContainerSection>
                <ContainerTittles>
                    <Tittle>{project ? project.infoprojetoDTO.titulo : ""}</Tittle>
                    <Inputs>
                    <Button text={'Dashboard'} tipo={"DashboardDetails"} rota={"dashboard"} numeroProjeto={project ? project.infoprojetoDTO.numeroDoProjeto: 0}/>
                        <label htmlFor="ata" onClick={downloadFile}>{ata ? ata.split(".")[0] : ""}</label>
                    </Inputs>
                </ContainerTittles>
                <ContainerInfos>
                    <ul>
                        <li>
                            <h1>NÚMERO:</h1><h2>{project?.infoprojetoDTO.numeroDoProjeto}</h2>
                        </li>
                        <li>
                            <h1>STATUS:</h1><h2>{project?.infoprojetoDTO.status === "NAO_INICIADO" ? "NÃO INICIADO" 
                                                : project?.infoprojetoDTO.status}</h2>
                        </li>
                        <li>
                            <h1>DATA DE CRIAÇÃO:</h1><h2>{project?.infoprojetoDTO.data_de_inicio}</h2>
                        </li>
                    </ul>
                </ContainerInfos>
                <ContainerDesc>
                    <h1>DESCRIÇÃO:</h1>
                    <h2>
                        {project?.infoprojetoDTO.descricao}
                    </h2>
                </ContainerDesc>
                <ContainerInfos>
                    <Box>
                        <h1>Solicitante / Seção Solicitante:</h1>
                        <h2>{project?.infoprojetoDTO.solicitante.nome.toUpperCase()}</h2>
                        <h2>SEÇÃO ASSISTÊNCIA TÉCNICA</h2>
                    </Box>
                    <Box>
                        <h1>Responsável / Seção Responsável:</h1>
                        <h2>{project?.infoprojetoDTO.responsavel.nome.toUpperCase()}</h2>
                        <h2>INSIDE SALES DEPARTMENT</h2>
                    </Box>
                </ContainerInfos>
                <span>Horas apontadas - Funcionários:</span>
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
                        <h1>Verba utilizada sobre o total orçado</h1>
                        <GraphCircular total={project ? project?.valoresTotaisDTO.valorTotalCcPagantes : 0} valor={10000} tipo={"valor"}/>
                    </Graphic>
                    <Graphic>
                        <h1>Horas das demandas sobre o total estabelecido</h1>
                        <GraphCircular 
                            total={project ? project?.valoresTotaisDTO.valorTotalEsforco : 0} 
                            valor={project ? project?.infoprojetoDTO.horas_apontadas : 0} 
                            tipo={"hora"}
                        />
                    </Graphic>
                </ContainerGraphs>
                <Graphic2>
                    <Top>
                        <div>
                            <h1>Utilização mensal de verba</h1>
                        </div>
                        <Filtros>
                            <div>
                                <label>Mês:</label>
                                <select name="mes">
                                    <option value="m1">Janeiro</option>
                                    <option value="m2">Fevereiro</option>
                                    <option value="m3">Março</option>
                                </select>
                            </div>
                            <div>
                                <label>Ano:</label>
                                <select name="ano">
                                    <option value="a1">2021</option>
                                    <option value="a2">2020</option>
                                    <option value="a3">2019</option>
                                </select>
                            </div>                        
                        </Filtros>
                    </Top>
                    <Bottom>
                        <Graph>
                            <Left>
                                <p>R$ 100.000,00</p>
                                <p>R$ 60.000,00</p>
                                <p>R$ 20.000,00</p>
                                <p>0</p>
                            </Left>
                            <Right>
                                <Square>
                                    <Pack>
                                        <Bar valor={18000}></Bar>
                                        <Bar valor={1250000}></Bar>
                                        <Bar valor={63000}></Bar>
                                        <Bar valor={22000}></Bar>
                                    </Pack>
                                    <Pack>
                                        <Bar valor={63000}></Bar>
                                        <Bar valor={22000}></Bar>
                                        <Bar valor={18000}></Bar>
                                        <Bar valor={1250000}></Bar>
                                    </Pack>
                                    <Pack>
                                        <Bar valor={18000}></Bar>
                                        <Bar valor={22000}></Bar>
                                        <Bar valor={1250000}></Bar>
                                        <Bar valor={63000}></Bar>
                                    </Pack>
                                </Square>
                            </Right>
                        </Graph>
                        <Footer>
                            <p>JAN 2021</p>
                            <p>FEV 2021</p>
                            <p>MAR 2021</p>
                        </Footer>
                    </Bottom>
                </Graphic2>
            </ContainerDetails>
        </Container>
        </>
    );
};

export default Details;