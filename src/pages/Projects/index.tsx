import React, { FormEvent } from 'react';

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

import intl from 'react-intl-universal';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

interface IProjetoProps {
    infoprojetoDTO: {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        status: string;
    };
    valoresTotaisDTO: {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };
}

const Projects: React.FC = () => {
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

    const [status, setStatus] = useState('');
    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);

    window.onload = async function handleProjetos() {
        const response = await api.get<IProjetoProps[]>('projetos');
        const data = response.data;
        setProjetos(data);
    }

    function defineStatus(valor: string) {
        setStatus(valor);
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        try {
            const response = await api.get<IProjetoProps[]>(status);
            const data = response.data;

            setTimeout(function() {
                setProjetos(data);
            }, 2000);

        } catch(err) {
            console.log("Não foi possível realizar a consulta.");
        }
    }

    const [selectedOption, setSelectedOption] = useState<String>();

    // This function is triggered when the select changes
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };
    
    return (
        <>
        <Navbar />
        <MenuLeft />
        <Container>
            <ContainerProject>
                <ContainerInfo>
                    <ContainerTitle>
                        <h1>{intl.get('tela_projetos.title')} <IoMdArrowDropright size={25} /></h1>
                        <span />
                    </ContainerTitle>
                    <ContainerFiltro>
                        <h1>{intl.get('tela_projetos.filtros.title')}:</h1>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.primeiro')}:</label>
                            <select name="secao" onChange={selectChange}>
                                <option value="nenhum">Nenhum</option>
                                <option value="secao1">ABC</option>
                                <option value="secao2">DEF</option>
                                <option value="secao3">GHI</option>
                                <option value="secao4">WEC</option>
                                <option value="secao3">KLM</option>
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <form onSubmit={filtraPorStatus}>
                                <button type="submit" 
                                onClick={() => defineStatus("projetos")}>Todos</button>

                                <button type="submit" 
                                onClick={() => defineStatus("projetos/em_andamento")}>Em andamento</button>

                                <button type="submit" 
                                onClick={() => defineStatus("projetos/atrasados")}>Atrasado</button>

                                <button type="submit" 
                                onClick={() => defineStatus("projetos/concluidos")}>Concluído</button>
                            </form>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                            <input type="text" placeholder="Digite aqui"/>
                        </div>
                    </ContainerFiltro>
                </ContainerInfo>
                <ProjectsGrid>
                    <Center>
                    {selectedOption && <h2>{selectedOption}</h2>}
                        {
                            projetos.map(projeto =>
                                <Card numeroDoProjeto={projeto.infoprojetoDTO.numeroDoProjeto} />
                            )
                        }
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