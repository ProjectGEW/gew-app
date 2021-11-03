import React, { useState, useCallback } from 'react';
import { useParams } from "react-router-dom";

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, MainProfileGrid, Email, Tittle } from './style';
import { Table, TableDimensions, TableScroll } from '../ConsultantsList/style';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import api from "../../../service/api";

interface IConsultantProps {
    numero_cracha: number;
    nome: string;
    email: string;
    valor_hora: number;
    status: string;
}

interface ISupplierProps {
    nome: string;
    email: string;
}

interface IProjectProps {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        titulo: string;
        data_de_inicio: string;
        status: string;
    };
    ccPagantes: [
        {
            secao: {
                id: number;
            }
        }
    ];
}

const ConsultantProfile: React.FC = () => {
    const [consultant, setConsultant] = useState<IConsultantProps>();
    const [supplier, setSupplier] = useState<ISupplierProps>();
    const [projects, setProjects] = useState<IProjectProps[]>([]);
    const { numeroCracha }: {numeroCracha: string}  = useParams();

    window.onload = async function handleData() {
        try {
            await api.get(`funcionarios/consultor/${numeroCracha}`).then((response) => {
                setConsultant(response.data);
            });

            await api.get(`fornecedores/${numeroCracha}`).then((response) => {
                setSupplier(response.data);
            });

            await api.get(`projetos/consultor/${numeroCracha}`).then((response) => {
                setProjects(response.data);
            });
        } catch(error) {
            console.log("Error: ", error);
        }
    };

    const desalocarConsultor = useCallback(async (numeroDoProjeto) => {
        await api.delete(`projetos/desalocar/${numeroDoProjeto}/${numeroCracha}`);
    }, [numeroCracha]);

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container>
                <Tittle>
                    <HiArrowNarrowLeft />
                    <h1>Consultores Registrados</h1>    
                </Tittle>
                <MainProfileGrid>
                    <div id="photo">
                        <div id="user" />
                        <div id="text">
                            <h2>STATUS:</h2><h3>{consultant?.status}</h3>
                        </div>
                    </div>
                    <div id="desc">
                        <div id="dataone">
                            <h1>{consultant?.nome}</h1>
                        </div>
                        <div id="datatwo">
                            <h2>Cadastro:</h2><h3>{consultant?.numero_cracha}</h3>
                            <h2>Data do cadastro:</h2><h3>20/10/2020</h3>
                        </div>
                        <div id="datatwo">
                            <h2>Fornecedor:</h2><h3>{supplier?.nome}</h3>
                            <h2>Valor da hora:</h2><h3>R$ {consultant?.valor_hora}</h3>
                        </div>
                        <div id="dataone">
                            <Email>
                                <h2>E-mail do consultor:</h2><h3>{consultant?.email}</h3>
                            </Email>
                            <Email>
                                <h2>E-mail do fornecedor:</h2><h3>{supplier?.email}</h3>
                            </Email>
                        </div>
                    </div>
                </MainProfileGrid>
                <Tittle>
                    Projetos atribuídos
                </Tittle>
                <TableDimensions>
                <Table>
                    <div id='header'>
                        <div className='cadastro'>Número</div>
                        <div className='status'>Status</div>
                        <div className='nome'>Título de Demanda</div>
                        <div className='projetos'>CC Pagante</div>
                        <div className='projetos'>Início</div>
                        <div className='atribuicao'>Desalocar</div>
                    </div>
                    <TableScroll>
                    {projects.map(project => (
                        <>
                            {project.infoprojetoDTO.status !== "CONCLUIDO" ? 
                                <tr id='column'>
                                    <td className='cadastro'>{project.infoprojetoDTO.numeroDoProjeto}</td>
                                    <td className='status'>{project.infoprojetoDTO.status}</td>
                                    <td className='nome'>{project.infoprojetoDTO.titulo}</td>
                                    <td className='projetos'>
                                        <select>
                                            {project.ccPagantes.map(ccPagante => (
                                                <option>{ccPagante.secao.id}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className='projetos'>{project.infoprojetoDTO.data_de_inicio}</td>
                                    <td className='atribuicao'>
                                        <button 
                                            onClick={() => desalocarConsultor(project.infoprojetoDTO.numeroDoProjeto)}
                                        >
                                            Desalocar
                                        </button>
                                    </td>
                                </tr>
                            : ""}
                        </>
                    ))}
                    </TableScroll>
                </Table>
                </TableDimensions>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default ConsultantProfile;