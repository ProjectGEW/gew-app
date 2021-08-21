import React, { useState } from 'react';

import { IoPersonAddSharp } from "react-icons/io5";
import { RiFileEditFill } from "react-icons/ri";
import { AiOutlineFolderView, AiFillEye } from "react-icons/ai";
import { CgInsertAfterR } from "react-icons/cg";
import { GoGraph } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";

import intl from "react-intl-universal";

import MenuLeft from "../components/MenuLeft";
import Navbar from "../components/Navbar";

import { ContainerMenuRight, ContIcons, Icon,TextMenuRight } from "./styleMenuRight";

import { ContainerHome, ContainerHomeGraph, Card, ContainerHomeCards, ContainerHomeTitle, Graph, GraphTitle,
    CardContent, GraphContainer, GraphCont, GraphContNum, GraphBars, Bar, GraphData, Data } from "./styles";

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

const Menu: React.FC = () => {
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
        <ContainerHome>
            <ContainerHomeTitle>
                <h1><strong>{intl.get('head.titulo_negrito')}</strong> {intl.get('head.titulo_normal')}</h1>
                <span />
            </ContainerHomeTitle>
            <ContainerHomeCards>
                <Card>
                    <div>
                        <h2>{intl.get('cards.primeiro.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="complete">87</h1>
                        <GraphContainer>a</GraphContainer>
                    </CardContent>
                    <div>
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>{intl.get('cards.segundo.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="up">14</h1>
                        <GraphContainer>a</GraphContainer>
                    </CardContent>
                    <div>
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>{intl.get('cards.terceiro.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="down">16</h1>
                        <GraphContainer>a</GraphContainer>
                    </CardContent>
                    <div>
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
            </ContainerHomeCards>
            <ContainerHomeGraph>
                <GraphTitle>
                    <h1>{intl.get('grafico.titulo')}</h1>
                </GraphTitle>
                <Graph>
                    <GraphCont>
                        <GraphContNum>+5</GraphContNum>
                        <GraphContNum>4</GraphContNum>
                        <GraphContNum>3</GraphContNum>
                        <GraphContNum>2</GraphContNum>
                        <GraphContNum>1</GraphContNum>
                        <GraphContNum>0</GraphContNum>
                    </GraphCont>
                    <GraphBars>
                        <Bar id="bar1"/>
                        <Bar id="bar2"/>
                        <Bar id="bar3"/>
                        <Bar id="bar4"/>
                        <Bar id="bar5"/>
                        <Bar id="bar6"/>
                        <Bar id="bar7"/>
                    </GraphBars>
                </Graph>
                <GraphData>
                    <Data id="dataOne">01/06</Data>
                    <Data id="dataTwo">02/06</Data>
                    <Data id="dataThree">03/06</Data>
                    <Data id="dataFour">04/06</Data>
                    <Data id="dataFive">05/06</Data>
                    <Data id="dataSix">06/06</Data>
                    <Data id="dataSeven">07/06</Data>
                </GraphData>
            </ContainerHomeGraph>
        </ContainerHome>
        <ContainerMenuRight>
            <ContIcons>
                <Icon>
                    <AiOutlineFolderView size={50} color="#fff" /> 
                </Icon> 
                <TextMenuRight>
                    <a href="../projects">{intl.get('menu_direito.primeiro_botao.primeiro')}</a>
                    <a href="../projects">{intl.get('menu_direito.primeiro_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <CgInsertAfterR size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./RegisterProjects">{intl.get('menu_direito.segundo_botao.primeiro')}</a>
                    <a href="./RegisterProjects">{intl.get('menu_direito.segundo_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <RiFileEditFill size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./EditProjects">{intl.get('menu_direito.terceiro_botao.primeiro')}</a>
                    <a href="./EditProjects">{intl.get('menu_direito.terceiro_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <IoPersonAddSharp size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./">{intl.get('menu_direito.quarto_botao.primeiro')}</a>
                    <a href="./">{intl.get('menu_direito.quarto_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon> 
                    <GiOrganigram size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./">{intl.get('menu_direito.quinto_botao.primeiro')}</a>
                    <a href="./">{intl.get('menu_direito.quinto_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <GoGraph size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./Dashboard">{intl.get('menu_direito.sexto_botao.primeiro')}</a>
                    <a href="./Dashboard">{intl.get('menu_direito.sexto_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
    </ContainerMenuRight>
    </>
  );
};

export default Menu;
