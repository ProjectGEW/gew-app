import React, { useState, useEffect } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import CardSelect from '../../components/CardProject/CardSelect';

import { ContainerProject, ContainerInfo, Projects, Container, ContainerTitle,
    ContainerFiltro, Center } from './style';
import { IoMdArrowDropright } from 'react-icons/io';

import api from "../../../service/api";

interface IProjeto {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        status: string;
    };
}

const ProjectsList: React.FC = () => {
    const [projetos, setProjetos] = useState<IProjeto[]>([]);

    useEffect(() => {
        api.get("projetos").then((response) => {
            setProjetos(response.data);
        })
    })

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
                            {projetos.map(projeto => (
                                projeto.infoprojetoDTO.status !== "CONCLUIDO" ? 
                                    <CardSelect key={projeto.infoprojetoDTO.numeroDoProjeto} numeroDoProjeto={projeto.infoprojetoDTO.numeroDoProjeto} />
                                : null
                            ))}
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

export default ProjectsList;