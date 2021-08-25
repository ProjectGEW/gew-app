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
import GraphLiquid from "../components/GraphLiquid";

import { ContainerMenuRight, ContIcons, Icon,TextMenuRight } from "./styleMenuRight";

import { ContainerHome, ContainerHomeGraph, Card, ContainerHomeCards, ContainerHomeTitle, Graph, GraphTitle,
    CardContent, GraphContainer, GraphCont, GraphContNum, GraphBars, Bar, GraphData, Data } from "./styles";

import api from '../../service/api'; 
import { count } from 'yargs';

const locales = {
    'pt-BR': require('../../language/pt-BR.json'),
    'en-US': require('../../language/en-US.json'),
    'es': require('../../language/es.json'),
    'fr-FR': require('../../language/fr-FR.json'),
};

interface Count {
    contagem: {
        concluidos: number;
        em_andamento: number;
        atrasados: number;
    };
    verba: {
        verba_concluidos: number;
        verba_em_andamento: number;
        verba_atrasados: number;
    }
}

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

    const [infos, setInfos] = useState<Count>();

    async function handleData() {
        try{
            const response = await api.get<Count>(`projetos/count`);
            const contagem = response.data;

            setInfos(contagem);
        } catch (err) {
            console.log("Não foi possivel realizar a leitura de dados")
        }
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        event.preventDefault();
        handleData();
    });

    return (
        <>
        {console.log(infos?.contagem.concluidos)}
        <Navbar />
        <MenuLeft />
        <ContainerHome>
            <ContainerHomeTitle>
                <h1><strong>{intl.get('head.titulo_negrito')}</strong> {intl.get('head.titulo_normal')}</h1>
                <span />
            </ContainerHomeTitle>
            <ContainerHomeCards>
                <Card>
                    <div id="FirstTitleCard">
                        <h2>{intl.get('cards.primeiro.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="complete">{infos?.contagem.concluidos}</h1>
                        <GraphContainer>
                           <GraphLiquid />
                        </GraphContainer>
                    </CardContent>
                    <div id="FirstVerbCard">
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ {infos?.verba.verba_concluidos}<AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>{intl.get('cards.segundo.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="up">{infos?.contagem.em_andamento}</h1>
                        <GraphContainer>
                        
                        </GraphContainer>
                    </CardContent>
                    <div>
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ {infos?.verba.verba_em_andamento}<AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h2>{intl.get('cards.terceiro.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="down">{infos?.contagem.atrasados}</h1>
                        <GraphContainer>
                           
                        </GraphContainer>
                    </CardContent>
                    <div>
                        <p><strong>{intl.get('cards.verba')}</strong>  R$ {infos?.verba.verba_atrasados}<AiFillEye id="icon-eye"/></p>
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
                    <a href="./register_projects">{intl.get('menu_direito.segundo_botao.primeiro')}</a>
                    <a href="./register_projects">{intl.get('menu_direito.segundo_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
            <ContIcons>
                <Icon>
                    <RiFileEditFill size={50} color="#fff" />
                </Icon>
                <TextMenuRight>
                    <a href="./edit_projects">{intl.get('menu_direito.terceiro_botao.primeiro')}</a>
                    <a href="./edit_projects">{intl.get('menu_direito.terceiro_botao.segundo')}</a>
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
                    <a href="./dashboard">{intl.get('menu_direito.sexto_botao.primeiro')}</a>
                    <a href="./dashboard">{intl.get('menu_direito.sexto_botao.segundo')}</a>
                </TextMenuRight>
            </ContIcons>
    </ContainerMenuRight>
    </>
  );
};

export default Menu;
