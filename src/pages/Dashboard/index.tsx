import React, { useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { AiFillEye } from "react-icons/ai";

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph, GraphLine, CardsMoney, Money } from './styles';

import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";

import intl from "react-intl-universal";

import api from '../../service/api';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

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
                            <span />
                        </Title>
                        <Graph>
                            <GraphLiquid dashboard={true} valor={47} />
                        </Graph>
                    </Card>
                    <Card>
                        <Title>
                            <h1>{intl.get('tela_dashboards.segundo_card.title')}</h1>
                            <span />
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
                    </GraphLine>
                    <CardsMoney>
                        <Money>
                            <Title>
                                <h1>{intl.get('tela_dashboards.cards.primeiro')}</h1>
                            </Title>
                            <span />
                            <AiFillEye id="icon-eye"/>
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
            <ContIcons></ContIcons>
        </MenuRight>
        </>
    );
};

export default Dashboard;