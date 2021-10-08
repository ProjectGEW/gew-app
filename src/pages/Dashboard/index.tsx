import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import intl from "react-intl-universal";
import api from '../../service/api';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";
import GL from "../components/GraphLine";
import BaseModalWrapperverbaUtilizada from '../components/DashboardPopUp/verbaUtilizada';
import BaseModalWrapperverbaDisponivel from '../components/DashboardPopUp/verbaDisponivel';

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph,
    GraphLine, CardsMoney, Money, Filtros, Line } from './styles';
import analisaValor from '../../utils/analisaValor';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

interface CardContent {
    infoprojetoDTO : {
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

const Dashboard: React.FC = () => {
    const { id }: {id: string}  = useParams();

    const [status, setStatus] = useState('');
    const [project, setProject] = useState<CardContent>();
    const [projetos, setProjetos] = useState<CardContent[]>([]);
    const [secoes, setSecoes] = useState<ISecoes[]>([]);
    const [countUtilizada, setCountUtilizada] = useState();

    /*const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };*/

    useEffect(() => {
        if(id === '0') {
            window.onload = async function handleProjetos() {
                const response = await api.get<CardContent[]>("projetos");
                const data = response.data;
                setProjetos(data);

                const responseSecao = await api.get<ISecoes[]>('secoes');
                const dataSecao = responseSecao.data;
                setSecoes(dataSecao);

                const responseCountUtilizada = await api.get(`projetos/count/verba/total`);
                const dataCountUtilizada = responseCountUtilizada.data;
                setCountUtilizada(dataCountUtilizada);
            }
            return;
        }

        window.onload = async function handleProjetos() {
            const responseProjetos = await api.get<CardContent>(`projetos/${id ? id : 0 }`);
            const dataProjetos = responseProjetos.data;
            setProject(dataProjetos);

            const responseSecao = await api.get<ISecoes[]>('secoes');
            const dataSecao = responseSecao.data;
            setSecoes(dataSecao);
        }
    }, [id, projetos]);

    //console.log(funcionarios ? funcionarios[0].valor_hora : 0);

    /*function teste() {
        const asd = new Array(setTotalAprovado(projetos.map(projetos => 
            projetos.valoresTotaisDTO.valorTotalCcPagantes)));

        return asd;
    }*/

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

    const [isModalVisibleVerbaUtilizada, setIsModalVisibleVerbaUtilizada] = useState(true);
    const [isModalVisibleVerbaDisponivel, setIsModalVisibleVerbaDisponivel] = useState(true);
    const [popUp, setPopUp] = useState<JSX.Element>();

    const toggleModalVerbaUtilizada = () => {
        setPopUp(
            <BaseModalWrapperverbaUtilizada 
                isModalVisible={isModalVisibleVerbaUtilizada} 
                onBackdropClick={toggleModalVerbaUtilizada} 
                valor={Math.trunc(porcentagemUtilizada)}
            />
        );
        setIsModalVisibleVerbaUtilizada(!isModalVisibleVerbaUtilizada);
    }

    const toggleModalVerbaDisponivel = () => {
        setPopUp(
            <BaseModalWrapperverbaDisponivel
                isModalVisible={isModalVisibleVerbaDisponivel} 
                onBackdropClick={toggleModalVerbaDisponivel} 
                valor={100 - Math.trunc(porcentagemUtilizada)}
            />
        );
        setIsModalVisibleVerbaDisponivel(!isModalVisibleVerbaDisponivel);
    }

    async function defineMoeda(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        var btns = ["BRL", "USD", "EUR"];
        var valor = document.activeElement?.id;

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.opacity = "0.4";
        }

        if(valor === "BRL") {
            document.getElementById(valor)!.style.opacity = "1";
        } else if(valor === "USD") {
            document.getElementById(valor)!.style.opacity = "1";
        } else if(valor === "EUR") {
            document.getElementById(valor)!.style.opacity = "1";
        }
    }

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

    const totalCcPagantes = [projetos.length], totalDespesas = [projetos.length];
    const totalValorHoraFuncionario = [projetos.length], totalHorasApontadas = [projetos.length];

    const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;

    for(var x = 0; x < projetos.length; x++) {
        totalCcPagantes[x] = projetos.map((projetos) => projetos.valoresTotaisDTO.valorTotalCcPagantes)[x];
        totalDespesas[x] = projetos.map((projetos) => projetos.valoresTotaisDTO.valorTotalDespesas)[x];
        totalValorHoraFuncionario[x] = projetos.map((projetos, index) => projetos.ccPagantes[index].secao.responsavel.valor_hora)[x];
        totalHorasApontadas[x] = projetos.map((projetos) => projetos.infoprojetoDTO.horas_apontadas)[x];
    }

    const valorUtilizado = totalHorasApontadas.reduce(reducer) * totalValorHoraFuncionario.reduce(reducer);
    const porcentagemUtilizada = (Number(countUtilizada) / totalCcPagantes.reduce(reducer)) * 100;
    
    const valorDisponivel = totalCcPagantes.reduce(reducer) - Number(countUtilizada);
    const porcentagemDisponivel = 100 - porcentagemUtilizada;

    return (
        <>
        <Navbar />
        <MenuLeft />
        <Container>
            <ContainerDashboard>
                <Liquid>
                    {popUp ? popUp : null}
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.primeiro_card.title')}</h1>
                            <span onClick={toggleModalVerbaUtilizada} />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={Math.round(porcentagemUtilizada)} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                            <span onClick={toggleModalVerbaDisponivel} />
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
                        <Filtros>
                            <div>
                                <label>Seção:</label>
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
                        </Filtros>
                        <Line>
                        {
                            //testes
                            //projetos ? projetos.map((projeto, index) => projeto.ccPagantes[index].secao.responsavel.valor_hora) : ''
                            //totalValorHoraFuncionario.reduce(reducer)
                            //totalHorasApontadas.reduce(reducer)
                            //"valor: " + analisaValor(valorUtilizado) + " | %: " + porcentagemUtilizada +
                            //" disponivel: " + analisaValor(valorDisponivel)
                        }
                        <GL/>
                        </Line>
                        <Filtros>
                            <div id="filtro-periodo">
                                <select name="dias">
                                    <option value="d1">Últimos 14 dias</option>
                                    <option value="d2">Últimos 28 dias</option>
                                    <option value="d3">Últimos 90 dias</option>
                                    <option value="d4">Últimos 365 dias</option>
                                    <option value="d5">Setembro</option>
                                    <option value="d6">Agosto</option>
                                    <option value="d7">2021</option>
                                    <option value="d8">2020</option>
                                </select>
                            </div>  
                        </Filtros>
                    </GraphLine>
                    <CardsMoney>
                        <Money id="money">
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.primeiro')}</h1>
                            </Title>
                            <div>
                                <form onSubmit={defineMoeda}>
                                    <button id="BRL" type="submit">BRL</button>
                                    <button id="USD" type="submit">USD</button>
                                    <button id="EUR" type="submit">EUR</button>
                                </form>
                            </div>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.segundo')}</h1>
                            </Title>
                            <h1>{analisaValor(valorDisponivel)}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.terceiro')}</h1>
                            </Title>
                            <h1>{analisaValor(Number(countUtilizada))}</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.quarto')}</h1>
                            </Title>
                                <h1>{analisaValor(totalCcPagantes.reduce(reducer))}</h1>
                        </Money>
                    </CardsMoney>
                </Lines>
            </ContainerDashboard>
        </Container> 
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default Dashboard;