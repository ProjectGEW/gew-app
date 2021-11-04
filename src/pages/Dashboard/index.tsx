import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import intl from "react-intl-universal";
import api from '../../service/api';
import { Line } from 'react-chartjs-2';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";
import PopupVerbaUtilizada from '../components/DashboardPopUp/verbaUtilizada';
import PopupVerbaDisponivel from '../components/DashboardPopUp/verbaDisponivel';

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph,
    GraphLine, CardsMoney, Money, Filtros, BoxLine, PopupModal, PopupTooltip, Status } from './styles';

import analisaValor from '../../utils/analisaValor';
import formatStatus from '../../utils/formatStatus';
import { ContainerLine } from '../components/GraphLine/styles';

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
        status: string;
        horas_apontadas: number;
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
    const { id }: { id: string }  = useParams();

    const [status, setStatus] = useState('');
    //const [project, setProject] = useState<CardContent>();
    const [projetos, setProjetos] = useState<CardContent[]>([]);
    const [secoes, setSecoes] = useState<ISecoes[]>([]);
    const [countUtilizada, setCountUtilizada] = useState();
    const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);
    //const [dataSelecionada, setDataSelecionada] = useState('14');

    /*const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };*/

    useEffect(() => {
        window.onload = async function handleProjetos() {
            const response = await api.get<CardContent[]>("projetos");
            const data = response.data;
            setProjetos(data);

            const responseSecao = await api.get<ISecoes[]>('secoes');
            const dataSecao = responseSecao.data;
            setSecoes(dataSecao);

            const responseDatas = await api.get<CountPerData[]>(`projetos/count/14`)
            const dataDatas = responseDatas.data;
            setCountsPerData(dataDatas);  

            const responseCountUtilizada = await api.get(`projetos/count/verba/0`);
            const dataCountUtilizada = responseCountUtilizada.data;
            setCountUtilizada(dataCountUtilizada);
        }
       
        if(id !== '0') {
            window.onload = async function handleProjeto() {
                const response = await api.get<CardContent[]>("projetos");
                const data = response.data;
                setProjetos(data);

                const responseSecao = await api.get<ISecoes[]>('secoes');
                const dataSecao = responseSecao.data;
                setSecoes(dataSecao);

                const responseDatas = await api.get<CountPerData[]>(`projetos/count/14`)
                const dataDatas = responseDatas.data;
                setCountsPerData(dataDatas); 
                
                projetos.filter(projeto => projeto.infoprojetoDTO.numeroDoProjeto === Number(id));
    
                const responseCountUtilizada = await api.get(`projetos/count/verba/${id ? id : 0}`);
                const dataCountUtilizada = responseCountUtilizada.data;
                setCountUtilizada(dataCountUtilizada);
            }
        }

    }, [id, projetos]);

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

    function defineStatus(valor: string) {
        var btns = ["Todos", "concluidos", "atrasados", "em_andamento"];

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        setStatus(valor);

        if(valor === "concluidos") {
            document.getElementById(valor)!.style.backgroundColor = "#adffb0";
        } else if (valor === "atrasados") {
            document.getElementById(valor)!.style.backgroundColor = "#ffbfbf";
        } else if (valor === "em_andamento") {
            document.getElementById(valor)!.style.backgroundColor = "#c2e4ff";
        } else if (valor === "") {
            document.getElementById(btns[0])!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
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
            const response = await api.get<CardContent[]>(resultado);
            const data = response.data;
            setProjetos(data);

        } else if (selectedOption === 'Todos') {
            if (statusteste === 'Todos') {
                resultado = `projetos`;
            } else if (statusteste !== 'Todos') {
                resultado = `projetos/` + statusteste + `/Todos`;
            }
            const response = await api.get<CardContent[]>(resultado);
            const data = response.data;
            setProjetos(data);
        }
    }

    const [selectedOption, setSelectedOption] = useState('Todos');

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
            const responsePorSecao = await api.get<CardContent[]>(resultado);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);

        } else if (value === 'Todos') {
            if (status === '') {
                resultado = `projetos`;
            } else if (status !== '') {
                resultado = `projetos/` + status + `/Todos`;
            }
            const responsePorSecao = await api.get<CardContent[]>(resultado);
            const dataPorSecao = responsePorSecao.data;
            setProjetos(dataPorSecao);
        }
    };

    const totalCcPagantes = [projetos.length];
    const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;

    if(Number(id) === 0) {
        for(var x = 0; x < projetos.length; x++) {
            totalCcPagantes[x] = projetos.map((projetos) => projetos.valoresTotaisDTO.valorTotalCcPagantes)[x];
        }
    } else {
        const recebe = projetos.filter(projeto => projeto.infoprojetoDTO.numeroDoProjeto === Number(id));
        totalCcPagantes[0] = recebe.map(projeto => projeto.valoresTotaisDTO.valorTotalCcPagantes)[0];
        console.log(totalCcPagantes[0]);
    }

    const porcentagemUtilizada = totalCcPagantes.reduce(reducer) > 0 ? (Number(countUtilizada) / (totalCcPagantes.reduce(reducer))) * 100 : 0;

    const valorDisponivel = Number(totalCcPagantes.reduce(reducer)) !== 0 ? totalCcPagantes.reduce(reducer) - Number(countUtilizada) : 0;
    const porcentagemDisponivel = Number(totalCcPagantes.reduce(reducer)) !== 0 ? 100 - porcentagemUtilizada : 0;
    
    const alterarData = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        //setDataSelecionada(value);
        
        api.get<CountPerData[]>(`projetos/count/${Number(value)}`).then((response => {
            setCountsPerData(response.data)
        }));         
    }
 
    const datas = countsPerData.map(datas => datas.data);
    const verbas = countsPerData.map(verbas => verbas.verbaUtilizada);

    const data = {
        labels: datas.reverse(),
        datasets: [{
        label: 'VERBA',
        data: verbas.reverse(),
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
                                    <PopupVerbaUtilizada fechar={close} valor={Math.round(porcentagemUtilizada)} />
                                )}
                            </PopupModal>
                            : ''}
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={Math.round(porcentagemUtilizada)} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                            <PopupTooltip trigger={<span />} position="right center">
                                <PopupVerbaDisponivel verba={analisaValor(Number(valorDisponivel))} valor={Math.round(porcentagemDisponivel)} />
                            </PopupTooltip>
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={Math.round(porcentagemDisponivel)} />
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
                                <select id="filtroSecao" name="secao" onChange={selectChange}>
                                    <option value="Todos">Todos</option>
                                    {
                                        secoes ? secoes.map(secoes =><option key={secoes.nome} value={secoes.nome}>{secoes.nome}</option>)
                                        :'Nenhuma seção foi encontrada'
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
                                    <Status key={index} status={projeto.infoprojetoDTO.status} disabled>
                                        {formatStatus(projeto.infoprojetoDTO.status)}
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
                            <h1>{analisaValor(Number(totalCcPagantes.reduce(reducer)))}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.terceiro')}</h1>
                            </Title>
                            <h1>{Number(totalCcPagantes.reduce(reducer)) !== 0 ? analisaValor(Number(countUtilizada)) : analisaValor(0)}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.segundo')}</h1>
                            </Title>
                            <h1>{analisaValor(valorDisponivel)}</h1>
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