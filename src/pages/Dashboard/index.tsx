import React, { useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { AiFillEye } from "react-icons/ai";

import { Container, ContainerDashboard, Liquid, Lines, Card, Title, Graph, GraphLine, CardsMoney, Money, Filtros, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';
import GraphLiquid from "../components/GraphLiquid";

import intl from "react-intl-universal";

import BaseModalWrapper from '../components/DashboardPopUp';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

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

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
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
                            <GraphLiquid dashboard={true} valor={47} />
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
                                <label>{intl.get('tela_projetos.filtros.terceiro')}:</label>
                                <select name="projeto">
                                    <option value="p1">Todos</option>
                                    <option value="p2">DEF</option>
                                    <option value="p3">GHI</option>
                                </select>
                            </div>
                            <div>
                                <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                                <select name="status">
                                    <option value="s1">Todos</option>
                                    <option value="s2">DEF</option>
                                    <option value="s3">GHI</option>
                                </select>
                            </div>
                            <div>
                                <label>Centro de Custo:</label>
                                <select name="cc">
                                    <option value="c1">Todos</option>
                                    <option value="c2">DEF</option>
                                    <option value="c3">GHI</option>
                                </select>
                            </div>                            
                        </Filtros>
                        <Line></Line>
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