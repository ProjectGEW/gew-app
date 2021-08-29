import React, { useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { AiFillEye } from "react-icons/ai";

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph, GraphLine, CardsMoney, Money } from './styles';

import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";
import api from '../../service/api';

interface Count {
    contagem: {
        concluidos: number;
        emAndamento: number;
        atrasados: number;
        total: number;
    };
    verba: {
        verbaConcluidos: number;
        verbaEmAndamento: number;
        verbaAtrasados: number;
    }
}

interface CountPerData {
    data: string;
    projetosConcluidos: number;
}

const Dashboard: React.FC = () => {

    const [counts, setCounts] = useState<Count>();
    const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);
    const today = new Date();

    console.log(countsPerData);

    const today_string = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    window.onload = async function handleData(): Promise<void> {
        try {
            const response = await api.get<Count>(`projetos/count`);
            const contagem = response.data;

            setCounts(contagem);

            const response_perData = await api.get<CountPerData[]>(`projetos/count/${today_string}`);
            const contagem_perData = response_perData.data;

            setCountsPerData(contagem_perData);
            
        } catch (err) {
           console.log("Não foi possivel realizar a leitura de dados");
        }
    }

    function calcularPorcentagem(count: number) {
        const total = counts ? counts.contagem.total : 0;
        const porcentagem = (count / total) * 100;

        return Math.floor(porcentagem);
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
                            <h1>VERBA UTILIZADA</h1>
                            <span />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={47} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>VERBA LIBERADA</h1>
                            <span />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={calcularPorcentagem(counts ? counts.contagem.emAndamento: 0)} />
                        </Graph>
                    </Card>
                </Liquid>
                <Lines>
                    <GraphLine>
                        <Title>
                            <h1>UTILIZAÇÃO DA VERBA</h1>
                        </Title>
                    </GraphLine>
                    <CardsMoney>
                        <Money>
                            <Title>
                                <h1>MOEDA</h1>
                            </Title>
                            <span />
                            <AiFillEye id="icon-eye"/>
                        </Money>
                        <Money>
                            <Title>
                                <h1>DISPONÍVEL</h1>
                            </Title>
                            <h1>R$ 175.000,00</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>NÃO LIBERADA</h1>
                            </Title>
                            <h1>R$ 25.000,00</h1>
                        </Money>
                        <Money>
                            <Title>
                                <h1>APROVADA</h1>
                            </Title>
                            <h1>R$ 200.000,00</h1>
                        </Money>
                    </CardsMoney>
                </Lines>
            </ContainerDashboard>
        </Container>
        
        <MenuRight>
            <ContIcons></ContIcons>
        </MenuRight>

        </>
    );
};

export default Dashboard;