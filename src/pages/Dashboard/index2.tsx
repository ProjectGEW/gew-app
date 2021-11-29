import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import { Line } from 'react-chartjs-2';
import intl from "react-intl-universal";

import api from '../../service/api';

import analisaValor from '../../utils/analisaValor';
import formatStatus from '../../utils/formatStatus';

import { errorfulNotify } from '../../hooks/SystemToasts';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";
import PopupVerbaUtilizada from '../components/DashboardPopUp/verbaUtilizada';
import PopupVerbaDisponivel from '../components/DashboardPopUp/verbaDisponivel';
import { ContainerLine } from '../components/GraphLine/styles';

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph,
    GraphLine, CardsMoney, Money, Filtros, BoxLine, PopupModal, PopupTooltip, Status } from './styles';


const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

interface CardContent {
    infoprojetoDTO: {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        statusProjeto: string;
        horas_apontadas: number;
        secao: string;
    };
    ccPagantes : [{
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
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

interface ISecoes {
    nome: string;
}

interface CountPerData {
    data: string;
    verbaUtilizada: number;
}

const Dashboard: React.FC = () => {
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
    
    const { id }: { id: string }  = useParams();

    const [projetos, setProjetos] = useState<CardContent[]>([]);
    const [global, setGlobal] = useState<CardContent[]>([]);

    const [secoes, setSecoes] = useState<ISecoes[]>([]);

    const [contagemVerba14, setContagemVerba14] = useState('');
    const [contagemVerba28, setContagemVerba28] = useState('');
    const [contagemVerbaGeral, setContagemVerbaGeral] = useState('');
    const [contagemVerbaDoProjeto, setContagemVerbaDoProjeto] = useState('');

    const [statusAtual, setStatusAtual] = useState('');
    const [secaoAtual, setSecaoAtual] = useState('');
    const [status, setStatus] = useState('');

    async function handleProject() {
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

            await api.get(`projetos/count/0`)
            .then((response => {
                setContagemVerbaGeral(response.data); 
            })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas."));

            await api.get(`projetos/count/14`)
            .then((response => {
                setContagemVerba14(response.data); 
            })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas nos últimos 14 dias."));

            await api.get(`projetos/count/28`)
            .then((response => {
                setContagemVerba28(response.data); 
            })).catch(() => errorfulNotify("Não foi possível encontrar a contagem de verbas nos últimos 28 dias."));

            await api.get(`projetos/count/verba/${id ? id : 0}`)
            .then((response => {
                setContagemVerbaDoProjeto(response.data); 
            })).catch(() => errorfulNotify(`Não foi possível encontrar a contagem de verbas do projeto ${id ? id : 0}.`));
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleProject();
    },[]);

    function filtraDadosPorStatus(status: string) {
        setStatusAtual(status);
        const separaProjetos = projetos.filter(res => res.infoprojetoDTO.statusProjeto === status);

        var btns = ["todos", "concluidos", "atrasados", "em_andamento"];

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        if(status === "concluidos") {
            document.getElementById(status)!.style.backgroundColor = "#adffb0";
        } else if (status === "atrasados") {
            document.getElementById(status)!.style.backgroundColor = "#ffbfbf";
        } else if (status === "em_andamento") {
            document.getElementById(status)!.style.backgroundColor = "#c2e4ff";
        } else if (status === "") {
            document.getElementById("todos")!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }

        if(secaoAtual.length > 0) {
            const separaPorStatusSecao = separaProjetos.filter(res => res.infoprojetoDTO.secao === secaoAtual);
            setProjetos(separaPorStatusSecao);
            return;
        }
        setProjetos(separaProjetos);
    }

    const filtraDadosPorSecao = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSecaoAtual(event.target.value);
        const separaProjetos = projetos.filter(res => res.infoprojetoDTO.secao === event.target.value);

        if(statusAtual.length > 0) {
            const separaPorStatusSecao = separaProjetos.filter(res => res.infoprojetoDTO.statusProjeto === statusAtual);
            setProjetos(separaPorStatusSecao);
            return;
        }
        setProjetos(separaProjetos);
    }

    
    
    const data = {
        labels: [0],
        datasets: [{
        label: 'VERBA',
        data: [0],
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
                                    <PopupVerbaUtilizada fechar={close} valor={Math.round(0)} />
                                )}
                            </PopupModal>
                            : ''}
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={Math.round(0)} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                            <PopupTooltip trigger={<span />} position="right center">
                                <PopupVerbaDisponivel verba={analisaValor(Number(0))} valor={Math.round(0)} />
                            </PopupTooltip>
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={Math.round(0)} />
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
                                    <option value="Todos">Todos</option>
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
                                        onClick={() => filtraDadosPorStatus('')}>
                                        {intl.get('tela_projetos.filtros.options.todos')}
                                    </button>
                                    <button type="submit" id="em_andamento" className="1"
                                        onClick={() => filtraDadosPorStatus('em_andamento')}>
                                        {intl.get('tela_projetos.filtros.options.emandamento')}
                                    </button>
                                    <button type="submit" id="atrasados" className="2"
                                        onClick={() => filtraDadosPorStatus('atrasados')}>
                                        {intl.get('tela_projetos.filtros.options.atrasado')}
                                    </button>
                                    <button type="submit" id="concluidos" className="3"
                                        onClick={() => filtraDadosPorStatus('concluidos')}>
                                        {intl.get('tela_projetos.filtros.options.concluido')}
                                    </button>
                                </div>
                            </div>               
                        </Filtros> 
                        :
                        <Filtros>
                            <div>
                                <h1>Número:</h1> 
                                <p>{projetos.filter(projeto => projeto.infoprojetoDTO.numeroDoProjeto === Number(id)).map(projeto => projeto.infoprojetoDTO.numeroDoProjeto)}</p>
                            </div>    
                            <div>
                                <h1>Projeto:</h1> 
                                <p>{projetos.filter(projeto => projeto.infoprojetoDTO.numeroDoProjeto === Number(id)).map(projeto => projeto.infoprojetoDTO.titulo)}</p>
                            </div>  
                            <div>
                                {projetos.filter(projeto => projeto.infoprojetoDTO.numeroDoProjeto === Number(id)).map((projeto, index) => 
                                    <Status key={index} status={projeto.infoprojetoDTO.statusProjeto} disabled>
                                        {formatStatus(projeto.infoprojetoDTO.statusProjeto)}
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
                                <select name="dias" onChange={undefined}>
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
                            <h1>{analisaValor(0)}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.terceiro')}</h1>
                            </Title>
                            <h1>{analisaValor(0)}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.segundo')}</h1>
                            </Title>
                            <h1>{analisaValor(0)}</h1>
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