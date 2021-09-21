import React, { useState, useEffect, FormEvent } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph, GraphLine, CardsMoney, Money, Filtros, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

import GraphLiquid from "../components/GraphLiquid";

import intl from "react-intl-universal";

import BaseModalWrapper from '../components/DashboardPopUp';
import { useParams } from 'react-router-dom';

import api from '../../service/api';


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
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
}

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

const Dashboard: React.FC = () => {
    const { id }: {id: string}  = useParams();

    const [status, setStatus] = useState('');
    const [project, setProject] = useState<CardContent>();
    const [projetos, setProjetos] = useState<IProjetoProps[]>([]);

    const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };

    console.log(project);
    console.log(projetos);

    useEffect(() => {
        if(id === undefined) {
            window.onload = async function handleProjetos() {
                const response = await api.get<IProjetoProps[]>("projetos");
                const data = response.data;

                setProjetos(data);
            }
            return;
        }

        window.onload = async () => (
            await api.get<CardContent>(`/projetos/${id ? id : null}`).then((response => {
            setProject(response.data);
        })))

    }, [id]);

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

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    } 

    async function defineMoeda(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        var btns = ["BRL", "USD", "EUR"];
        var valor = document.activeElement?.id;

        for(var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.opacity = "0.4";
        }

        //setMoeda(valor);

        if(valor === "BRL") {
            document.getElementById(valor)!.style.opacity = "1";
        } else if(valor === "USD") {
            document.getElementById(valor)!.style.opacity = "1";
        } else if(valor === "EUR") {
            document.getElementById(valor)!.style.opacity = "1";
        }
    }

    function defineStatus(valor: string) {
        setStatus(valor);
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        try {
            const response = await api.get<IProjetoProps[]>(status, config);
            const data = response.data;

            setTimeout(function() {
                setProjetos(data);
            }, 100);

        } catch(err) {
            console.log("Não foi possível realizar a consulta.");
        }
    }

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
                            <span onClick={toggleModal} />
                            <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={62} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                            <span onClick={toggleModal} />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={15} />
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
                                <select name="cc">
                                    <option value="c1">Todos</option>
                                    <option value="c2">DEF</option>
                                    <option value="c3">GHI</option>
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
                            {/*<div>
                                <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                                <input type="text" placeholder="Digite aqui"/>
                            </div>*/}                     
                        </Filtros>
                        <Line>
                            
                        </Line>
                        <Filtros>
                            <div id="filtro-periodo">
                                <select name="dias">
                                    <option value="d1">Últimos 14 dias</option>
                                    <option value="d2">DEF</option>
                                    <option value="d3">GHI</option>
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
                            <h1>R$ 175.000,00</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.terceiro')}</h1>
                            </Title>
                            <h1>R$ 25.000,00</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.quarto')}</h1>
                            </Title>
                            <h1>R$ 200.000,00</h1>
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