import React, { useEffect, useState, FormEvent } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import CardEdit from '../components/CardProject/CardEdit';
import { ContIcons } from '../components/MenuRight/styles';

import api from "../../service/api";
import intl from 'react-intl-universal';

import { errorfulNotify } from '../../hooks/SystemToasts';

import { ContainerProject, ContainerInfo, Projects, Container, ContainerTitle,
    ContainerFiltro, Center } from './styles';
import { Msg } from '../Projects/styles';

import { IoMdArrowDropright } from 'react-icons/io';
import { BiHourglass } from 'react-icons/bi';
import { FiRefreshCcw } from 'react-icons/fi';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

interface IProjetoProps {
    projetoData: {
      id: number;
      numeroDoProjeto: number;
      titulo: string;
      descricao: string;
      data_de_inicio: string;
      data_de_termino: string;
      data_de_aprovacao: string;
      statusProjeto: string;
      horas_apontadas: number;
      secao: string,
    };
    secoesPagantes : [{
      secao: {
        id: number;
        responsavel: {
          numero_cracha: number;
          nome: string;
          cpf: string;
          valor_hora: number;
        };
        nome: string;
      },
      percentual: number;
      valor: number;
    }];
    valoresTotais : {
      valorTotalCcPagantes: number;
      valorTotalDespesas: number;
      valorTotalEsforco: number;
    };  
    despesas: [{
      nome: string;
      esforco: number;
      valor: number;
    }];
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

    // const token = localStorage.getItem('Token');
    // let config = {
    //     headers: { Authorization: `Bearer ${token}`},
    // };

    const [global, setGlobal] = useState<IProjetoProps[]>([]);
    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);
    const [secoes, setSecoes] = useState<ISecoes[]>([]);

    const [statusAtual, setStatusAtual] = useState('TODOS');
    const [secaoAtual, setSecaoAtual] = useState('TODOS');

    async function handleProject() {
        try {
            await api.get<IProjetoProps[]>(`projetos`)
            .then((response => {
                setProjetos(response.data); 
                setGlobal(response.data);
            })).catch(() => errorfulNotify("Não foi possível encontrar os projetos."));

            await api.get<ISecoes[]>(`secoes`)
            .then((response => {
                setSecoes(response.data); 
            })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleProject();
    },[]);

    function filtraDadosPorStatus(status: string) {
        setStatusAtual(status);
        const separaProjetos = status === "TODOS" ? 
            global.filter(res => res) : global.filter(res => res.projetoData.statusProjeto === status);

        var btns = ["todos", "CONCLUIDOS", "ATRASADOS", "EM_ANDAMENTO"];

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        if(status === "CONCLUIDOS") {
            document.getElementById(status)!.style.backgroundColor = "#adffb0";
        } else if (status === "ATRASADOS") {
            document.getElementById(status)!.style.backgroundColor = "#ffbfbf";
        } else if (status === "EM_ANDAMENTO") {
            document.getElementById(status)!.style.backgroundColor = "#c2e4ff";
        } else if (status === "TODOS") {
            document.getElementById("todos")!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }

        if(secaoAtual !== "TODOS") {
            const separaPorStatusSecao = separaProjetos.filter(res => res.projetoData.secao === secaoAtual);
            setProjetos(separaPorStatusSecao);
            return;
        }
        setProjetos(separaProjetos);
    }

    const filtraDadosPorSecao = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSecaoAtual(event.target.value);
        
        const separaProjetos = (event.target.value !== 'TODOS') ?
            global.filter(res => res.projetoData.secao === event.target.value)
        : global;
        
        if(statusAtual !== 'TODOS') {
            const separaPorStatusSecao = separaProjetos.filter(res => res.projetoData.statusProjeto === statusAtual);
            setProjetos(separaPorStatusSecao);
        } else {
            setProjetos(separaProjetos);
        }
    }

    const search = async (event: React.ChangeEvent<{ value: string }>) => {
        const recebeTexto = event.target.value;

        if(event.target.value !== '') {
            setProjetos(global.filter(projeto => 
                projeto.projetoData.titulo.toLocaleLowerCase().includes(recebeTexto.toLocaleLowerCase()) ||
                projeto.projetoData.numeroDoProjeto.toString().includes(recebeTexto)
            ))
        } else {
            setProjetos(global);
        }        
    };

    const [atualizar, setAtualizar] = useState(false);

    useEffect(() => {
        if(atualizar) {
            api.get<IProjetoProps[]>('projetos').then((response) => (setProjetos(response.data)));
        }
    },[atualizar]);

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
                    <select name="secao" onChange={filtraDadosPorSecao}>
                      <option value="TODOS">Todos</option>
                      {
                        secoes ? secoes.map(secoes =><option key={secoes.nome} value={secoes.nome}>{secoes.nome}</option>)
                        :'Nenhuma seção foi encontrada'
                      }
                    </select>
                  </div>
                  <div>
                    <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                    <div>
                        <button type="submit" id="todos" className="0"
                            onClick={() => filtraDadosPorStatus('TODOS')}>
                            {intl.get('tela_projetos.filtros.options.todos')}
                        </button>
                        <button type="submit" id="EM_ANDAMENTO" className="1"
                            onClick={() => filtraDadosPorStatus('EM_ANDAMENTO')}>
                            {intl.get('tela_projetos.filtros.options.emandamento')}
                        </button>
                        <button type="submit" id="ATRASADOS" className="2"
                            onClick={() => filtraDadosPorStatus('ATRASADOS')}>
                            {intl.get('tela_projetos.filtros.options.atrasado')}
                        </button>
                        <button type="submit" id="CONCLUIDOS" className="3"
                            onClick={() => filtraDadosPorStatus('CONCLUIDOS')}>
                            {intl.get('tela_projetos.filtros.options.concluido')}
                        </button>
                    </div>
                  </div>
                  <div>
                      <label>Projeto:</label>
                      <input placeholder="Pesquise aqui..." onChange={search}/>
                  </div>
                  <div>
                    <FiRefreshCcw onClick={() => setAtualizar(true)} size={25}/>
                  </div>
              </ContainerFiltro>
            </ContainerInfo>
            <Projects>
                <Center>
                    {
                        projetos && projetos.length > 0 ?
                            projetos.map((projeto) =>
                                <CardEdit key={projeto.projetoData.id} numeroDoProjeto={projeto.projetoData.numeroDoProjeto} />
                            )
                        :
                            <Msg>
                                <BiHourglass size={40} />
                                <h1>{intl.get('tela_projetos.msg.texto')}</h1>
                            </Msg>
                    }
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