import React from 'react';

import { IoPersonAddSharp } from 'react-icons/io5';
import { RiFileEditFill } from 'react-icons/ri';
import { AiOutlineFolderView, AiFillEye } from 'react-icons/ai';
import { CgInsertAfterR } from 'react-icons/cg';
import { GoGraph } from 'react-icons/go';
import { GiOrganigram } from 'react-icons/gi';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';

import { ContainerMenuRight, ContIcons, Icon, TextMenuRight } from './styleMenuRight';

import { ContainerHome, ContainerHomeGraph, Card, ContainerHomeCards, ContainerHomeTitle, Graph, GraphTitle,
    CardContent, GraphContainer, GraphCont, GraphContNum, GraphBars, Bar, GraphData, Data } from './styles';
       
const Menu: React.FC = () => {
    return (
        <>
            <Navbar />
            <MenuLeft />
            <ContainerHome>
                <ContainerHomeTitle>
                    <h1><strong>Visão</strong> Geral</h1>
                    <span />
                </ContainerHomeTitle>
                <ContainerHomeCards>
                    <Card>
                        <div>
                            <h2>Projetos Concluídos:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="complete">87</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h2>Projetos Em Andamento:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="up">14</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h2>Projetos Atrasados:</h2>
                        </div>
                        <CardContent>
                            <span />
                            <h1 id="down">16</h1>
                            <GraphContainer />
                        </CardContent>
                        <div>
                            <p><strong>Verba Total:</strong>  R$ 159.956,76 <AiFillEye id="icon-eye"/></p>
                        </div>
                    </Card>
                </ContainerHomeCards>
                <ContainerHomeGraph>
                    <GraphTitle>
                        <h1>PROJETOS TERMINADOS NOS ÚLTIMOS 7 DIAS</h1>
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
                            <Bar id="bar1"></Bar>
                            <Bar id="bar2"></Bar>
                            <Bar id="bar3"></Bar>
                            <Bar id="bar4"></Bar>
                            <Bar id="bar5"></Bar>
                            <Bar id="bar6"></Bar>
                            <Bar id="bar7"></Bar>
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
                        <a href="../Projects/">VISUALIZAR</a>
                        <a href="../Projects/">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <CgInsertAfterR size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">CADASTRAR</a>
                        <a href="./">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <RiFileEditFill size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">EDITAR</a>
                        <a href="./">PROJETOS</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <IoPersonAddSharp size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">CADASTRAR</a>
                        <a href="./">CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon> 
                        <GiOrganigram size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">ALOCAR</a>
                        <a href="./">CONSULTORES</a>
                    </TextMenuRight>
                </ContIcons>
                <ContIcons>
                    <Icon>
                        <GoGraph size={50} color="#fff" />
                    </Icon>
                    <TextMenuRight>
                        <a href="./">IR PARA</a>
                        <a href="./">DASHBOARDS</a>
                    </TextMenuRight>
                </ContIcons>
        </ContainerMenuRight>
    </>
    );
};

export default Menu;