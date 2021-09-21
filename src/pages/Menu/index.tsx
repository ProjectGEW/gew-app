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
import analisaValor from '../../utils/analisaValor';


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

    const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };

    const [counts, setCounts] = useState<Count>();
    const [countsPerData, setCountsPerData] = useState<CountPerData[]>([]);
    const today = new Date();

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
                        <h1 id="complete">{counts ? counts.contagem.concluidos : 0}</h1>
                        <GraphContainer>
                           <GraphLiquid valor={calcularPorcentagem(counts ? counts.contagem.concluidos: 0)} />
                        </GraphContainer>
                    </CardContent>
                    <div id="FirstVerbCard">
                        <p><strong>{intl.get('cards.verba')}</strong>{analisaValor(
                            counts ? counts.verba.verbaConcluidos : 0
                        )}<AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div id="SecondTitleCard">
                        <h2>{intl.get('cards.segundo.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="up">{counts ? counts.contagem.emAndamento : 0}</h1>
                        <GraphContainer>
                            <GraphLiquid valor={calcularPorcentagem(counts ? counts.contagem.emAndamento: 0)} />
                        </GraphContainer>
                    </CardContent>
                    <div id="SecondVerbCard">
                        <p><strong>{intl.get('cards.verba')}</strong>{analisaValor(
                            counts ? counts.verba.verbaEmAndamento : 0)}
                            <AiFillEye id="icon-eye"/></p>
                    </div>
                </Card>
                <Card>
                    <div id="ThirdTitleCard">
                        <h2>{intl.get('cards.terceiro.titulo')}</h2>
                    </div>
                    <CardContent>
                        <span />
                        <h1 id="down">{counts ? counts.contagem.atrasados : 0}</h1>
                        <GraphContainer>
                            <GraphLiquid valor={calcularPorcentagem(counts ? counts.contagem.atrasados: 0)} />
                        </GraphContainer>
                    </CardContent>
                    <div id="ThirdVerbCard">
                        <p><strong>{intl.get('cards.verba')}</strong>{analisaValor(
                            counts ? counts.verba.verbaAtrasados : 0)}
                            <AiFillEye id="icon-eye"/></p>
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
                        <Bar title="a" valor={countsPerData[6] ? countsPerData[6].projetosConcluidos : 0} id="bar1"/>
                        <Bar valor={countsPerData[5] ? countsPerData[5].projetosConcluidos : 0} id="bar2"/>
                        <Bar valor={countsPerData[4] ? countsPerData[4].projetosConcluidos : 0} id="bar3"/>
                        <Bar valor={countsPerData[3] ? countsPerData[3].projetosConcluidos : 0} id="bar4"/>
                        <Bar valor={countsPerData[2] ? countsPerData[2].projetosConcluidos : 0} id="bar5"/>
                        <Bar valor={countsPerData[1] ? countsPerData[1].projetosConcluidos : 0} id="bar6"/>
                        <Bar valor={countsPerData[0] ? countsPerData[0].projetosConcluidos : 0} id="bar7"/>
                    </GraphBars>
                </Graph>
                <GraphData>
                    <Data id="dataOne">{countsPerData[6] ? countsPerData[6].data : "00/00"}</Data>
                    <Data id="dataTwo">{countsPerData[5] ? countsPerData[5].data : "00/00"}</Data>
                    <Data id="dataThree">{countsPerData[4] ? countsPerData[4].data : "00/00"}</Data>
                    <Data id="dataFour">{countsPerData[3] ? countsPerData[3].data : "00/00"}</Data>
                    <Data id="dataFive">{countsPerData[2] ? countsPerData[2].data : "00/00"}</Data>
                    <Data id="dataSix">{countsPerData[1] ? countsPerData[1].data : "00/00"}</Data>
                    <Data id="dataSeven">{countsPerData[0] ? countsPerData[0].data : "00/00"}</Data>
                </GraphData>
            </ContainerHomeGraph>
        </ContainerHome>
        <ContainerMenuRight>
            <a href="../projects">
                <ContIcons id="first">
                    <Icon>
                        <AiOutlineFolderView size={50} color="#fff" /> 
                    </Icon> 
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.primeiro_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.primeiro_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
            <a href="./register_projects">
                <ContIcons id="second">
                    <Icon>
                        <CgInsertAfterR size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.segundo_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.segundo_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
            <a href="./edit_projects">
                <ContIcons id="three">
                    <Icon>
                        <RiFileEditFill size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.terceiro_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.terceiro_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
            <a href="./register_consultants">
                <ContIcons id="four">
                    <Icon>
                        <IoPersonAddSharp size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.quarto_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.quarto_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
            <a href="./register_consultants">
                <ContIcons id="five">
                    <Icon> 
                        <GiOrganigram size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.quinto_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.quinto_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
            <a href="./dashboard/0">
                <ContIcons id="six">
                    <Icon>
                        <GoGraph size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <p>{intl.get('menu_direito.sexto_botao.primeiro')}</p>
                        <p>{intl.get('menu_direito.sexto_botao.segundo')}</p>
                    </TextMenuRight>
                </ContIcons>
            </a>
    </ContainerMenuRight>
    </>
  );
};

export default Menu;
