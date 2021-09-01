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

import intl from 'react-intl-universal';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

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

/*const optStatus = [
    "Todos",
    "Em andamento",
    "Atrasado",
    "Concluído"
];*/

const optTitulo = [
    "abc",
    "ghi",
    "wec"
];

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

    window.onload = async function handleProjetos() {
        const response = await api.get<IProjetoProps[]>("projetos");
        const data = response.data;
        setProjetos(data);
    }

    const [buscaTitulo, setBuscaTitulo] = useState('');
    const projetoFiltrado = optTitulo
    .filter((titulo) => titulo.toLowerCase().includes(buscaTitulo.toLowerCase()));
    console.log(projetoFiltrado);
    
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
                            <select name="secao">
                                <option value="se1">Nenhum</option>
                                <option value="se2">ABC</option>
                                <option value="se3">DEF</option>
                                <option value="se4">GHI</option>
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <select id="status">
                                <option>Todos</option>
                                <option>Em andamento</option>
                                <option>Atrasado</option>
                                <option>Concluído</option> 
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                            <input 
                            onChange={(ev) => setBuscaTitulo(ev.target.value)} 
                            type="text" 
                            value={buscaTitulo}
                            placeholder="Digite aqui"/>
                        </div>
                    </ContainerFiltro>
                </ContainerInfo>
                <ProjectsGrid>
                    <Center>
                        {projetos.map(projeto =>
                            <Card numeroDoProjeto={projeto.infoprojetoDTO.numeroDoProjeto} />    
                        )}

                        {
                        // dentro do map do projetos
                        // projeto.infoprojetoDTO.status === "CONCLUIDO" ? 
                        //     <CardConcluded id={projeto.infoprojetoDTO.id}/>
                        // :
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