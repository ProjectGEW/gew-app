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
import intl from 'react-intl-universal';

interface IProjetoProps {
    infoprojetoDTO: {
        numeroDoProjeto: number;
        status: string;
    };
}

interface ISecao {
    nome: string;
}

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

const ProjectsList: React.FC = () => {
    const [global, setGlobal] = useState<IProjetoProps[]>([]);
    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);
    const [secoes, setSecoes] = useState<ISecao[]>([]);
    const [status, setStatus] = useState('');
    const [selectedOption, setSelectedOption] = useState('Todos');

    const [language] = useState(() => {
        let languageStorage = localStorage.getItem('Language');

        if (languageStorage) {
            let languageObject = JSON.parse(languageStorage);
            return languageObject;
        }
    });

    intl.init({
        currentLocale: language.code,
        locales
    });

    window.onload = async function handleData() {
        try {
            await api.get("projetos").then((response) => {
                setProjetos(response.data);
                setGlobal(response.data);
            });

            await api.get("secoes").then((response) => {
                setSecoes(response.data);
            });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        var resultado = '';
        setSelectedOption(value);

        if (value !== 'Todos') {
            if (status === '') {
                resultado = `projetos/secao/` + value;
            } else if (status !== '') {
                resultado = `projetos/` + status + `/` + value;
            }

            try {
                const responsePorSecao = await api.get<IProjetoProps[]>(resultado);
                const dataPorSecao = responsePorSecao.data;
                setProjetos(dataPorSecao);
                setGlobal(dataPorSecao);  
            } catch (error) {
                console.log("Error: ", error);
            }

        } else if (value === 'Todos') {
            if (status === '') {
                resultado = `projetos`;
            } else if (status !== '') {
                resultado = `projetos/` + status + `/Todos`;
            }
            const responsePorSecao = await api.get<IProjetoProps[]>(resultado);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);
            setGlobal(dataPorSecao);
        }
    };

    function defineStatus(valor: string) {

        var btns = ["Todos", "concluidos", "atrasados", "em_andamento"];

        for (var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        setStatus(valor);

        if (valor === "concluidos") {
            document.getElementById(valor)!.style.backgroundColor = "#adffb0";
        } else if (valor === "atrasados") {
            document.getElementById(valor)!.style.backgroundColor = "#ffbfbf";
        } else if (valor === "em_andamento") {
            document.getElementById(valor)!.style.backgroundColor = "#c2e4ff";
        } else if (valor === "") {
            document.getElementById(btns[0])!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }
    }

    async function filtraPorStatus(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        let statusteste = '';
        var resultado = '';

        if (document.activeElement) {
            statusteste = document.activeElement?.id;
        } else {
            statusteste = status;
        }

        if (selectedOption !== 'Todos') {
            if (statusteste === 'Todos') {
                resultado = `projetos/secao/` + selectedOption;
            } else if (statusteste !== 'Todos') {
                resultado = `projetos/` + statusteste + `/` + selectedOption;
            }
            const response = await api.get<IProjetoProps[]>(resultado);
            const data = response.data;
            setProjetos(data);
            setGlobal(data);

        } else if (selectedOption === 'Todos') {
            if (statusteste === 'Todos') {
                resultado = `projetos`;
            } else if (statusteste !== 'Todos') {
                resultado = `projetos/` + statusteste + `/Todos`;
            }
            const response = await api.get<IProjetoProps[]>(resultado);
            const data = response.data;
            setProjetos(data);
            setGlobal(data);
        }
    }

    const search = async (event: React.ChangeEvent<{ value: string }>) => {
        if(event.target.value !== '') {
            try {
                const responsePorNome = await api.get<IProjetoProps[]>(`projetos/titulo/` + event.target.value);
                const dataPorNome = responsePorNome.data;

                setProjetos(dataPorNome);
            } catch(err: any) {
                console.log(err.message);
            }
        } else {
            setProjetos(global);
        }        
    };

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
                                <select name="secao" onChange={selectChange}>
                                    <option selected>Todos</option>
                                    {secoes.map(secao => (
                                        <option key={secao.nome}>{secao.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                                <form onSubmit={filtraPorStatus}>
                                <button type="submit" id="Todos" className="0"
                                    onClick={() => defineStatus('')}>
                                    {intl.get('tela_projetos.filtros.options.todos')}
                                </button>
                                <button type="submit" id="em_andamento" className="1"
                                    onClick={() => defineStatus('em_andamento')}>
                                    {intl.get('tela_projetos.filtros.options.emandamento')}
                                </button>
                                <button type="submit" id="atrasados" className="2"
                                    onClick={() => defineStatus('atrasados')}>
                                    {intl.get('tela_projetos.filtros.options.atrasado')}
                                </button>
                                <button type="submit" id="concluidos" className="3"
                                    onClick={() => defineStatus('concluidos')}>
                                    {intl.get('tela_projetos.filtros.options.concluido')}
                                </button>
                            </form>
                            </div>
                            <div>
                                <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                                <input type="text" placeholder="Número do projeto" onChange={search} />
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