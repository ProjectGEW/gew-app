import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Line } from 'react-chartjs-2';
import intl from "react-intl-universal";

import api from '../../service/api';

import analisaValor from '../../utils/analisaValor';
import formatStatus from '../../utils/formatStatus';

import { errorfulNotify } from '../../hooks/SystemToasts';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';
import GraphLiquid from "../../components/GraphLiquid";
import PopupVerbaUtilizada from '../../components/DashboardPopUp/verbaUtilizada';
import PopupVerbaDisponivel from '../../components/DashboardPopUp/verbaDisponivel';
import { ContainerLine } from '../../components/GraphLine/styles';

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph,
  GraphLine, CardsMoney, Money, Filtros, BoxLine, PopupModal, PopupTooltip, Status } from './styles';


const locales = {
  'pt-BR': require('../../language/pt-BR.json'),
  'en-US': require('../../language/en-US.json'),
  'es': require('../../language/es.json'),
  'fr-FR': require('../../language/fr-FR.json'),
};

interface CardContent {
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
    verbaUtilizada: number;
  };      
}

interface ISecoes {
  nome: string;
}

interface CountPerData {
  data: string;
  verbaUtilizada: number;
}

interface Coutverba {
  total: number;
}

const Dashboard: React.FC = () => {
  const [language] = useState(() => {
    let languageStorage = localStorage.getItem('Language');

    if(languageStorage) {
      let languageObject = JSON.parse(languageStorage);
      return languageObject;
    } 
  });

  const [animacao] = useState(() => {
    let animationStorage = localStorage.getItem('Animation');

    if(animationStorage) {
      return JSON.parse(animationStorage);
    } 
  });

  intl.init({
    currentLocale: language.code,
    locales
  });
  
  const { id }: { id: string }  = useParams();

  const [projetos, setProjetos] = useState<CardContent[]>([]);
  const [projeto, setProjeto] = useState<CardContent>();
  const [global, setGlobal] = useState<CardContent[]>([]);

  const [secoes, setSecoes] = useState<ISecoes[]>([]);

  const [contagemVerba14, setContagemVerba14] = useState<CountPerData[]>([]);
  const [contagemVerba28, setContagemVerba28] = useState<CountPerData[]>([]);
  const [contagemVerbaGeral, setContagemVerbaGeral] = useState<Coutverba>();
  const [contagemVerbaDoProjeto14, setContagemVerbaDoProjeto14] = useState<CountPerData[]>([]);
  const [contagemVerbaDoProjeto28, setContagemVerbaDoProjeto28] = useState<CountPerData[]>([]);
  const [contagemPorData, setContagemPorData] = useState<CountPerData[]>([]);

  const [statusAtual, setStatusAtual] = useState('TODOS');
  const [secaoAtual, setSecaoAtual] = useState('TODOS');

  const handleProject = async () => {
    try {
      await api.get<CardContent[]>(`projetos`)
      .then((response => {
        setProjetos(response.data); 
        setGlobal(response.data);
      })).catch(() => errorfulNotify("Não foi possível encontrar os projetos."));

      await api.get<ISecoes[]>(`secoes`)
      .then((response => {
        setSecoes(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));

      await api.get<Coutverba>(`projetos/count/verba/0`)
      .then((response => {
        setContagemVerbaGeral(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas."));

      await api.get(`projetos/count/14`)
      .then((response => {
        setContagemVerba14(response.data); 
        setContagemPorData(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas nos últimos 14 dias."));

      await api.get(`projetos/count/28`)
      .then((response => {
        setContagemVerba28(response.data); 
      })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas nos últimos 28 dias."));

      if(id !== '0') {
        await api.get<CardContent>(`projetos/${id}`)
        .then((response => {
          setProjeto(response.data); 
        })).catch(() => errorfulNotify(`Não foi possível encontrar o projeto ${id ? id : 0}.`));

        await api.get(`projetos/count/14/${id}`)
        .then((response => {
          setContagemVerbaDoProjeto14(response.data); 
          setContagemPorData(response.data); 
        })).catch(() => errorfulNotify(`Não foi possível encontrar a contagem de verbas nos últimos 14 dias do projeto ${id ? id : 0}.`));

        await api.get(`projetos/count/28/${id}`)
        .then((response => {
          setContagemVerbaDoProjeto28(response.data); 
        })).catch(() => errorfulNotify(`Não foi possível encontrar a contagem de verbas nos últimos 28 dias do projeto ${id ? id : 0}.`));

        await api.get(`projetos/count/verba/${id}`)
        .then((response => {
          setContagemVerbaGeral(response.data); 
        })).catch(() => errorfulNotify(`Não foi possível encontrar a contagem de verbas do projeto ${id ? id : 0}.`));
      }
    } catch(e) {
      console.log(e);
    }
  } 

  useEffect(() => {
    handleProject();
  },[]);

  // async function buscaVerbaDosProjetos() {
  //     if(id !== '0') {
  //         await api.get(`projetos/coutn/verba/${id}`)
  //         .then((response => {
  //             setVerbaDosProjetos([...verbaDosProjetos, response.data]);
  //         })).catch(() => errorfulNotify(`Não foi possível encontrar a verba do projeto ${id ? id : 0}.`));
  //     }
  // }
    
  function filtraDadosPorStatus(status: string) {
    setStatusAtual(status);
    const separaProjetos = status === "TODOS" ? 
    global.filter(res => res) : global.filter(res => res.projetoData.statusProjeto === status);
    
    var btns = ["todos", "CONCLUIDO", "ATRASADOS", "EM_ANDAMENTO"];
    
    for(var x = 0; x < btns.length; x++) {
      document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
    }
      
    if(status === "CONCLUIDO") {
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
    : global
    
    if(statusAtual !== 'TODOS') {
      const separaPorStatusSecao = separaProjetos.filter(res => res.projetoData.statusProjeto === statusAtual);
      setProjetos(separaPorStatusSecao);
    } else {
      setProjetos(separaProjetos);
    }
  }
    
  const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;
  const totalCCPagantes = [projetos.length];
  
  for(var x = 0; x < projetos.length; x++) {
    totalCCPagantes[x] = projetos.map((projetos) => projetos.valoresTotais.valorTotalCcPagantes)[x];
  }
    
  let dados = {aprovada: 0, utilizada: 0, disponivel: 0, porcentagemUtilizada: 0, porcentagemDisponivel: 0,
    datasGrafico: [''], verbasGrafico: [0]};
                
  function calculaDadosGeral() {
    const pega = projetos.map(res => res.valoresTotais.verbaUtilizada);        
    
    const contVerbaTotal = pega.reduce(reducer);
    const verbaDisponivel = totalCCPagantes.reduce(reducer) - contVerbaTotal;

    const porcentagemUtilizada = ((contVerbaTotal * 100) / (totalCCPagantes.reduce(reducer)));
    const porcentagemDisponivel = 100 - porcentagemUtilizada;

    const datas = totalCCPagantes.reduce(reducer) > 0 ? contagemPorData.map(datas => datas.data) : ["0"];    
    const verbas = totalCCPagantes.reduce(reducer) > 0 ? contagemPorData.map(verbas => verbas.verbaUtilizada) : [0];

    dados = {
      aprovada: totalCCPagantes.reduce(reducer),
      utilizada: contVerbaTotal,
      disponivel: verbaDisponivel,
      porcentagemUtilizada: porcentagemUtilizada,
      porcentagemDisponivel: porcentagemDisponivel,
      datasGrafico: datas,
      verbasGrafico: verbas
    };
  }

  function calculaDadosPorProjeto() {
    const totalCCPagantes = projeto ? projeto.valoresTotais.valorTotalCcPagantes : 0;

    const verbaDisponivel = totalCCPagantes - Number(contagemVerbaGeral?.total);

    const porcentagemUtilizada = ((Number(contagemVerbaGeral?.total) * 100) / totalCCPagantes);
    const porcentagemDisponivel = 100 - porcentagemUtilizada;

    const datas = totalCCPagantes > 0 ? contagemPorData.map(datas => datas.data) : ["0"];    
    const verbas = totalCCPagantes > 0 ? contagemPorData.map(verbas => verbas.verbaUtilizada) : [0];

    dados = {
      aprovada: totalCCPagantes,
      utilizada: Number(contagemVerbaGeral?.total),
      disponivel: verbaDisponivel,
      porcentagemUtilizada: porcentagemUtilizada,
      porcentagemDisponivel: porcentagemDisponivel,
      datasGrafico: datas,
      verbasGrafico: verbas
    };    
  }

  if(totalCCPagantes.reduce(reducer) > 0 && id === '0') {
    calculaDadosGeral();
  } else if(totalCCPagantes.reduce(reducer) > 0 && id !== '0') {
    calculaDadosPorProjeto();
  }

  const alterarData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    
    if(id === '0') {
      if(value === '14') {
        setContagemPorData(contagemVerba14);
      } else if(value === '28') {
        setContagemPorData(contagemVerba28);
      }
    } else {
      if(value === '14') {
        setContagemPorData(contagemVerbaDoProjeto14);
      } else if(value === '28') {
        setContagemPorData(contagemVerbaDoProjeto28);
      }
    }
  }
    
  const data = {
    labels: dados.datasGrafico.reverse(),
    datasets: [{
      label: 'VERBA',
      data: dados.verbasGrafico.reverse(),
      fill: true,
      backgroundColor: 'rgba(0, 186, 255, 0.19)',
      borderColor: '#0090C5',
    }],
  };

  return (
    <>
      <Navbar />
      <MenuLeft />
      <Container>
        <ContainerDashboard>
          <Liquid>
            <Card>
              <Title>
                <h1>{intl.get('tela_dashboards.primeiro_card.title')}</h1>
                {Number(id) === 0 ? 
                <PopupModal closeOnEscape trigger={<span />} modal>
                  {(close: any) => (
                    <PopupVerbaUtilizada fechar={close} status={statusAtual} valor={Math.round(dados.porcentagemUtilizada)} />
                  )}
                </PopupModal>
                : ''}
              </Title>
              <Graph>
                <GraphLiquid dashboard={true} valor={Math.round(dados.porcentagemUtilizada)} animacao={animacao} />
              </Graph>
            </Card>
            <Card>
              <Title>
                <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                <PopupTooltip trigger={<span />} position="right center">
                  <PopupVerbaDisponivel verba={analisaValor(Number(dados.disponivel))} valor={Math.round(dados.porcentagemDisponivel)} />
                </PopupTooltip>
              </Title>
              <Graph>
                <GraphLiquid dashboard={true} valor={Math.round(dados.porcentagemDisponivel)} animacao={animacao} />
              </Graph>
            </Card>
          </Liquid>
          <Lines>
            <GraphLine>
              <Title>
                <h1>{intl.get('tela_dashboards.terceiro_card.title')}</h1>
              </Title>
              {Number(id) === 0 ? 
              <Filtros>
                <div>
                  <label>Seção:</label>
                  <select id="filtroSecao" name="secao" onChange={filtraDadosPorSecao}>
                    <option value="TODOS">Todos</option>
                    {
                      secoes ? secoes.map(secoes =>
                        <option key={secoes.nome} value={secoes.nome}>{secoes.nome}</option>)
                      : 'Nenhuma seção foi encontrada'
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
                    <button type="submit" id="CONCLUIDO" className="3"
                      onClick={() => filtraDadosPorStatus('CONCLUIDO')}>
                      {intl.get('tela_projetos.filtros.options.concluido')}
                    </button>
                  </div>
                </div>               
              </Filtros> 
              :
              <Filtros>
                <div>
                  <h1>Número:</h1> 
                  <p>{projetos.filter(projeto => projeto.projetoData.numeroDoProjeto === Number(id)).map(projeto => projeto.projetoData.numeroDoProjeto)}</p>
                </div>    
                <div>
                  <h1>Projeto:</h1> 
                  <p>{projetos.filter(projeto => projeto.projetoData.numeroDoProjeto === Number(id)).map(projeto => projeto.projetoData.titulo)}</p>
                </div>  
                <div>
                  {projetos.filter(projeto => projeto.projetoData.numeroDoProjeto === Number(id)).map((projeto, index) => 
                    <Status key={index} status={projeto.projetoData.statusProjeto} disabled>
                      {formatStatus(projeto.projetoData.statusProjeto)}
                    </Status>
                  )}
                </div>   
              </Filtros>}
              <BoxLine>
                <ContainerLine> 
                  <Line width={50} height={50} data={data} options={{ maintainAspectRatio: false }} />
                </ContainerLine>
              </BoxLine>
              <Filtros id="filtrosDown">
                <div id="trocar-moeda">
                  <select name="moedas">
                    <option value="m1">BRL - Real brasileiro</option>
                    <option value="m2">USD - Dólar americano</option>
                    <option value="m3">EUR - Euro</option>
                  </select>
                </div>
                <div id="filtro-periodo">
                  <select name="dias" onChange={alterarData}>
                    <option value="14">Últimos 14 dias</option>
                    <option value="28">Últimos 28 dias</option>
                  </select>
                </div>  
              </Filtros>
            </GraphLine>
            <CardsMoney>
            <Money>
              <Title>
                <h1>{intl.get('tela_dashboards.cards.quarto')}</h1>
              </Title>
              <h1>{analisaValor(dados.aprovada)}</h1>
            </Money>
            <Money>
              <Title>
                <h1>{intl.get('tela_dashboards.cards.terceiro')}</h1>
              </Title>
              <h1>{analisaValor(dados.utilizada)}</h1>
            </Money>
            <Money>
              <Title>
                <h1>{intl.get('tela_dashboards.cards.segundo')}</h1>
              </Title>
              <h1>{analisaValor(dados.disponivel)}</h1>
            </Money>
            </CardsMoney>
          </Lines>
        </ContainerDashboard>
      </Container> 
      <MenuRight numeroDoProjeto={Number(id)}>
        <ContIcons />
      </MenuRight>
    </>
  );
};

export default Dashboard;