import React from 'react';

import { IoMdArrowDropright } from 'react-icons/io';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import CardEdit from '../components/CardProject/CardEdit';

import { ContainerProject, ContainerInfo, Projects, Container, ContainerTitle,
    ContainerFiltro, Center } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

const EditProjects: React.FC = () => {
    return (
        <>
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
                    <Projects>
                        <Center>
                            <CardEdit statusColor={"Atrasado"} /> 
                            <CardEdit statusColor={"EmAndamento"} />
                        </Center>
                        <Center>
                            <CardEdit statusColor={"NaoIniciado"} /> 
                            <CardEdit statusColor={"NaoIniciado"} />
                        </Center>                     
                        <Center>
                            <CardEdit statusColor={"NaoIniciado"} /> 
                            <CardEdit statusColor={"NaoIniciado"} />
                        </Center>                     
                        <Center>
                            <CardEdit statusColor={"NaoIniciado"} /> 
                            <CardEdit statusColor={"NaoIniciado"} />
                        </Center>                     
                        <Center>
                            <CardEdit statusColor={"NaoIniciado"} /> 
                            <CardEdit statusColor={"NaoIniciado"} />
                        </Center>                     
                        <Center>
                            <CardEdit statusColor={"NaoIniciado"} /> 
                            <CardEdit statusColor={"NaoIniciado"} />
                        </Center>                     
                    </Projects>
                </ContainerProject>
            </Container>
            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
    );
};

export default EditProjects;