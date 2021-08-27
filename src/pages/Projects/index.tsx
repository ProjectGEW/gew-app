import React from 'react';

import { IoMdArrowDropright } from 'react-icons/io';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import Card from '../components/CardProject/Card';

import { ContainerProject, ContainerInfo, ProjectsGrid, Container, ContainerTitle,
    ContainerFiltro, Center } from './styles';

import { ContIcons } from '../components/MenuRight/styles';
import { useState } from 'react';

import api from "../../service/api";

interface IProjetoProps {
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

const Projects: React.FC = () => {

    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);

    window.onload = async function handleProjetos() {
        const response = await api.get<IProjetoProps[]>("projetos");
        const data = response.data;

        setProjetos(data);
    }

    return (
        <>
        {console.log(projetos)}
        <Navbar />
        <MenuLeft />
        <Container>
            <ContainerProject>
                <ContainerInfo>
                    <ContainerTitle>
                        <h1>Projetos alocados <IoMdArrowDropright size={25} /></h1>
                        <span />
                    </ContainerTitle>
                    <ContainerFiltro>
                        <h1>Filtros:</h1>
                        <div>
                            <label>Seção:</label>
                            <select name="secao">
                                <option value="se1">ABC</option>
                                <option value="se2">DEF</option>
                                <option value="se3">GHI</option>
                            </select>
                        </div>
                        <div>
                            <label>Status:</label>
                            <select name="status">
                                <option value="Atrasado">Atrasado</option>
                                <option value="Em andamento" selected>Em andamento</option>
                                <option value="Concluído">Concluído</option>
                            </select>
                        </div>
                        <div>
                            <label>Projeto:</label>
                            <input placeholder="Digite aqui" />
                        </div>
                    </ContainerFiltro>
                </ContainerInfo>
                <ProjectsGrid>
                    <Center>
                        {projetos ? projetos.map(projeto =>
                            // projeto.infoprojetoDTO.status === "CONCLUIDO" ? 
                            //     <CardConcluded id={projeto.infoprojetoDTO.id}/>
                            // :
                            <Card id={projeto.infoprojetoDTO.id}  />
                        ) : ''}
                    </Center>
                </ProjectsGrid>
            </ContainerProject>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Projects;