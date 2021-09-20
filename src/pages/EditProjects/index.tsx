import React, { useState, FormEvent } from 'react';

import { IoMdArrowDropright } from 'react-icons/io';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import CardEdit from '../components/CardProject/CardEdit';

import { ContainerProject, ContainerInfo, Projects, Container, ContainerTitle,
    ContainerFiltro, Center } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

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

const EditProjects: React.FC = () => {
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

    const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };

    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);
    const [secoes, setSecoes] = useState<ISecoes[]>([]);
    const [status, setStatus] = useState('');
    //const [nomeProjeto, setNomeProjeto] = useState('');
    console.log(projetos);

    window.onload = async function handleProjetos() {
        const response = await api.get<IProjetoProps[]>('projetos', config);
        const data = response.data;
        setProjetos(data);

        const responseSecao = await api.get<ISecoes[]>('secoes', config);
        const dataSecao = responseSecao.data;
        setSecoes(dataSecao);
    }

    function defineStatus(valor: string) {
        var btns = ["Todos", "concluidos", "atrasados", "em_andamento"];

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        if(valor === "projetos") {
            setStatus('');
            document.getElementById(valor)!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        } else {
            setStatus(valor);

            if(valor === "concluidos") {
                document.getElementById(valor)!.style.backgroundColor = "#adffb0";
            } else if(valor === "atrasados") {
                document.getElementById(valor)!.style.backgroundColor = "#ffbfbf";
            } else if(valor === "em_andamento") {
                document.getElementById(valor)!.style.backgroundColor = "#c2e4ff";
            } else if(valor === "Todos") {
                document.getElementById(valor)!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
            }
        }        
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        let statusteste = '';
        var resultado = '';

        if(document.activeElement) {
            statusteste = document.activeElement?.id;
        } else {
            statusteste = status;
        }
        
        if(selectedOption !== 'Todos') {     
            if(statusteste === 'Todos') {
                resultado = `projetos/secao/` + selectedOption;
            } else if(statusteste !== 'Todos') {
                resultado = `projetos/` + statusteste + `/` + selectedOption;
            }
            const response = await api.get<IProjetoProps[]>(resultado, config);
            const data = response.data;
            setProjetos(data);  

        } else if(selectedOption === 'Todos') {
            if(statusteste === 'Todos') {
                resultado = `projetos`;
            } else if(statusteste !== 'Todos') {
                resultado = `projetos/` + statusteste + `/Todos`;       
            }     
            const response = await api.get<IProjetoProps[]>(resultado, config);
            const data = response.data;
            setProjetos(data);       
        }
    }

    const [selectedOption, setSelectedOption] = useState('Todos');

    const selectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        var resultado = '';
        setSelectedOption(value);
      
        if(value !== 'Todos') {
            if(status === '') {
                resultado = `projetos/secao/` + value;
            } else if(status !== '') {
                resultado = `projetos/` + status + `/` + value;
            }  
            const responsePorSecao = await api.get<IProjetoProps[]>(resultado, config);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);

        } else if(value === 'Todos') {
            if(status === '') {
                resultado = `projetos`;
            } else if(status !== '') {
                resultado = `projetos/` + status + `/Todos`;
            }  
            const responsePorSecao = await api.get<IProjetoProps[]>(resultado, config);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);
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
                            <label>{intl.get('tela_projetos.filtros.primeiro')}:</label>
                            <select name="secao" onChange={selectChange}>
                                <option value="Todos">Todos</option>
                                {
                                secoes ?
                                    secoes.map(secoes =>
                                        <option key={secoes.nome} value={secoes.nome}>{secoes.nome}</option>
                                    )
                                    :
                                    'Nenhuma seção foi encontrada'
                                }
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
                            <label>Projeto:</label>
                            <input placeholder="Digite aqui" />
                        </div>
                    </ContainerFiltro>
                </ContainerInfo>
                <Projects>
                    <Center>
                        <CardEdit statusColor={"Atrasado"} /> 
                        <CardEdit statusColor={"EmAndamento"} />
                        <CardEdit statusColor={"Atrasado"} /> 
                        <CardEdit statusColor={"EmAndamento"} />
                        <CardEdit statusColor={"Atrasado"} /> 
                        <CardEdit statusColor={"EmAndamento"} />
                        <CardEdit statusColor={"Atrasado"} /> 
                        <CardEdit statusColor={"EmAndamento"} />
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