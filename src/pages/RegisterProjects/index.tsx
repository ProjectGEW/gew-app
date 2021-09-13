import React, { useState } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { BoxProjeto } from '../components/RegisterProject/Projeto/styles';
import { BoxResponsavel } from '../components/RegisterProject/Responsavel/styles';
import { BoxDinheiro, Table, Total } from '../components/RegisterProject/Dinheiro/styles';
import { BoxDatas } from '../components/RegisterProject/Datas/styles';

import Button from '../components/Button';

import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai';

import { Container, ContainerRegister, Info, Content, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

import RowDespesas from '../components/RegisterProject/Dinheiro/Row/RowDP';
import RowCcPagantes from '../components/RegisterProject/Dinheiro/Row/RowCC';

const RegisterProjects: React.FC = () => {

    // Ata
    const [data, setData] = useState("");

    function testeata() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }

    // Gerar linhas
    const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([<RowDespesas />]);
    const [rowCC, setRowCC] = useState<JSX.Element[]>([<RowCcPagantes />]);

    // Trocar etapa
    var etapas = ["boxProjeto", "boxResponsavel", "boxDinheiro", "boxDatas"];

    function trocarEtapa(etapa: string) {
        for(var x = 0; x < 4; x++) {
            document.getElementById(etapas[x])!.style.display = "none";
        }
        document.getElementById(etapa)!.style.display = "block";
    }

    return (
        <>
        <Navbar />
        <MenuLeft />
        <Container>
            <ContainerRegister>
                <Info>
                    <h1>Cadastrar Projeto</h1>
                </Info>
                <Content>
                    <Line nome={"boxResponsavel"}>
                        <div>
                            <p>Projeto</p>
                            <IoIosCheckmarkCircle onClick={() => trocarEtapa("boxProjeto")}/>
                        </div>
                        <div>
                            <p>Responsáveis</p>
                            <RiErrorWarningFill onClick={() => trocarEtapa("boxResponsavel")}/>
                        </div>
                        <div>
                            <p>R$</p>
                            <RiErrorWarningFill onClick={() => trocarEtapa("boxDinheiro")}/>
                        </div>
                        <div>
                            <p>Datas</p>
                            <RiErrorWarningFill onClick={() => trocarEtapa("boxDatas")}/>
                        </div>
                    </Line>

                    <BoxProjeto id="boxProjeto">
                        <form action="" method="post">
                            <div>
                                <label>Número do projeto:</label>
                                <input type="text" />
                                
                                <label>Título do projeto:</label>
                                <input type="text" />

                                <label>Descrição do projeto:</label>
                                <textarea />
                            </div>
                            <div>
                                <p>Ata de aprovação:</p>
                                <label htmlFor="ata">{data ? data : "SELECIONAR ARQUIVO"}</label>
                                <input type="file" id="ata" onClick={testeata} />

                                <Button tipo={"Projeto"} text={"Continuar"} />
                            </div>
                        </form>
                    </BoxProjeto>
                    
                    <BoxResponsavel id="boxResponsavel">
                        <form action="" method="post">
                            <div>
                                <label>Nome do responsável:</label>
                                <input type="text" />
                                
                                <label>Nome do solicitante:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Seção do responsável:</label>
                                <input type="text" />
                                <Button tipo={"Lupa"} text={""} />
                                
                                <label>Seção do solicitante:</label>
                                <input type="text" />
                                <Button tipo={"Lupa"} text={""} />

                                <Button tipo={"Responsavel"} text={"Continuar"} />
                            </div>
                        </form>
                    </BoxResponsavel>

                    <BoxDinheiro id="boxDinheiro">
                        <form action="" method="post">
                            <Table>
                                <div id="first-table">
                                    <h1>Despesas (desembolsos)</h1>
                                    <h1>Esforço</h1>
                                    <h1>Valor (R$)</h1>
                                </div>
                                <div id="first-scroll">
                                    {rowDespesas.map(teste => teste)}
                                    <span><AiFillPlusCircle onClick={() => { setRowDespesas([...rowDespesas, <RowDespesas />]) }} /></span>
                                    <Total>
                                        <h2>TOTAL:</h2>
                                        <input id="totalEsforco" type="text" value="1500h" className="alinhar" />
                                        <input id="totalValor" type="text" value="40.000,00" className="alinhar" />
                                    </Total>
                                </div>
                            </Table>
                            <Table>
                                <div id="second-table">
                                    <h1>Centro de Custo</h1>
                                    <h1>Responsável</h1>
                                    <h1>Percentual</h1>
                                    <h1>Valor (R$)</h1>
                                </div>
                                <div id="second-scroll">
                                    {rowCC.map(teste => teste)}
                                    <span><AiFillPlusCircle onClick={() => { setRowCC([...rowCC, <RowCcPagantes />]) }} /></span>
                                </div>
                            </Table>
                            <Button tipo={"Dinheiro"} text={"Continuar"} />
                        </form>
                    </BoxDinheiro>

                    <BoxDatas id="boxDatas">
                        <form action="" method="post">
                            <div>
                                <label>Data de ínicio:</label>
                                <label>Data de término:</label>
                                <label>Data de aprovação:</label>
                            </div>
                            <div>
                                <input type="text" />
                        
                                <input type="text" />
                        
                                <input type="text" />
                            </div>
                            <div>
                                <Button tipo={"Responsavel"} text={"Continuar"} />
                            </div>
                        </form>
                    </BoxDatas>

                </Content>
            </ContainerRegister>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
        
    ); 
};

export default RegisterProjects;