import React, { FormEvent } from 'react';

import { IoMdArrowDropright } from 'react-icons/io';
import { BiHourglass } from 'react-icons/bi';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import Card from '../components/CardProject/Card';

import { ContainerProject, ContainerInfo, ProjectsGrid, Container, ContainerTitle,
    ContainerFiltro, Center, Msg } from './styles';

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
        secao: string;
    };
    valoresTotaisDTO: {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };
}

interface ISecoes {
    nome: string;
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

    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);
    const [secoes, setSecoes] = useState<ISecoes[]>([]);
    const [status, setStatus] = useState('');
    //const [nomeProjeto, setNomeProjeto] = useState('');

    window.onload = async function handleProjetos() {
        const response = await api.get<IProjetoProps[]>('projetos');
        const data = response.data;
        setProjetos(data);

        const responseSecao = await api.get<ISecoes[]>('secoes');
        const dataSecao = responseSecao.data;
        setSecoes(dataSecao);
    }

    function defineStatus(valor: string) {
        setStatus(valor);
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const response = await api.get<IProjetoProps[]>(status);
        const data = response.data;
        setProjetos(data);           
    }

    const [selectedOption, setSelectedOption] = useState('');

    const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
      
        if(value !== 'Todos') {
            const responsePorSecao = await api.get<IProjetoProps[]>('projetos/secao/' + value);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);
            
        } else if(value === 'Todos') {
            /*const responsePorSecao = await api.get<IProjetoProps[]>('projetos');
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);*/
            window.location.reload();
        }
    };   

    /*const [inputValue, setInputValue] = useState("");

    const search = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setTimeout(function() {
            setInputValue(value);
        }, 100);
    };*/

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
                                <option value="Todos">Todos</option>
                                {
                                secoes ?
                                    secoes.map(secoes =>
                                        <option value={secoes.nome}>{secoes.nome}</option>
                                    )
                                    :
                                    'Nenhuma seção foi encontrada'
                                }
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <form onSubmit={filtraPorStatus}>
                                <button type="submit" 
                                    onClick={() => defineStatus("projetos")}>
                                    {intl.get('tela_projetos.filtros.options.todos')}
                                </button>
                                <button type="submit" 
                                    onClick={() => defineStatus("projetos/em_andamento")}>
                                    {intl.get('tela_projetos.filtros.options.emandamento')}
                                </button>
                                <button type="submit" 
                                    onClick={() => defineStatus("projetos/atrasados")}>
                                    {intl.get('tela_projetos.filtros.options.atrasado')}
                                </button>
                                <button type="submit" 
                                    onClick={() => defineStatus("projetos/concluidos")}>
                                    {intl.get('tela_projetos.filtros.options.concluido')}
                                </button>
                            </form>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                            <input type="text" placeholder="Nome do projeto"/>
                        </div>
                    </ContainerFiltro>
                </ContainerInfo>
                <ProjectsGrid>
                    <Center>
                    {/*selectedOption && <h2>{selectedOption}</h2>*/}
                        {
                            projetos ?
                            projetos.map((projeto) =>
                                <Card numeroDoProjeto={projeto.infoprojetoDTO.numeroDoProjeto} />
                            )
                            : 
                            <Msg>
                                <BiHourglass size={40}/>
                                <h1>{intl.get('tela_projetos.msg.texto')}</h1>
                            </Msg>
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