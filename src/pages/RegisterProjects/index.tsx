import React, { useState, useCallback } from 'react';
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

import Paper from "@material-ui/core/Paper";

import { useDropzone } from "react-dropzone";

const RegisterProjects: React.FC = () => {
    const initalValue = {
        infosProjetosInputDTO: {
            numeroDoProjeto: 0,
            titulo: "",
            descricao: "",
            nome_responsavel: "",
            nome_solicitante: ""
        },
        despesasInputDTO: [
          {
            nome: "",
            esforco: 0,
            valor: 0
          }
        ]
    }

    const teste2 = [
        {
            um: 0
        }
    ]

    teste2.push({ um: 2 })

    //alert(teste2[1].um);

    // Ata
    const [file, setFile] = useState<object>();
    console.log(file);
    const [fileName, setFileName] = useState();

    // Gerar linhas
    const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([<RowDespesas number={1} />]);
    const [rowCC, setRowCC] = useState<JSX.Element[]>([<RowCcPagantes number={1} />]);

    // Trocar etapa
    var etapas = ["boxProjeto", "boxResponsavel", "boxDinheiro", "boxDatas"];
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        onDropAccepted: onDrop,
    });

    const { ref, ...rootProps } = getRootProps();
    const [tela, setTela] = useState('');

    function trocarEtapa(etapa: string) {
        for (var x = 0; x < 4; x++) {
            document.getElementById(etapas[x])!.style.display = "none";
        }
        document.getElementById(etapa)!.style.display = "block";
        setTela(etapa);
    }

    function atualizarLine() {
        for (var x = 0; x < 4; x++) {
            if (document.getElementById(etapas[x])!.style.display === "block") {
                return document.getElementById(etapas[x])?.id;
            }
        }
    }

    const teste = () => {
        const json = JSON.stringify(initalValue);

        const numeroProjeto = (document.getElementById("numeroProjeto") as HTMLInputElement).value;
        const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
        const descricao = (document.getElementById("descricao") as HTMLTextAreaElement).value;
        const nome_responsavel = (document.getElementById("nome_responsavel") as HTMLInputElement).value;
        const nome_solicitante = (document.getElementById("nome_solicitante") as HTMLInputElement).value;

        initalValue.infosProjetosInputDTO["numeroDoProjeto"] = parseInt(numeroProjeto);
        initalValue.infosProjetosInputDTO["titulo"] = titulo;
        initalValue.infosProjetosInputDTO["descricao"] = descricao;
        initalValue.infosProjetosInputDTO["nome_responsavel"] = nome_responsavel;
        initalValue.infosProjetosInputDTO["nome_solicitante"] = nome_solicitante;

        const despesa = [];
        for (let i = 1; i < rowDespesas.length; i++) {
          despesa.push((document.getElementById(`despesa${i}`) as HTMLInputElement).value)
        }

        despesa.map(teste => {console.log(teste)
          initalValue.despesasInputDTO.push({
            nome: teste,
            esforco: 0,
            valor: 0
          })
        })
        alert(json);
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
                        <Line nome={tela}>
                            <div onClick={() => trocarEtapa("boxProjeto")}>
                                <p>Projeto</p>
                                <RiErrorWarningFill />
                                <IoIosCheckmarkCircle />
                            </div>
                            <div onClick={() => trocarEtapa("boxResponsavel")}>
                                <p>Responsáveis</p>
                                <RiErrorWarningFill />
                                <IoIosCheckmarkCircle />
                            </div>
                            <div onClick={() => trocarEtapa("boxDinheiro")}>
                                <p>R$</p>
                                <RiErrorWarningFill />
                                <IoIosCheckmarkCircle />
                            </div>
                            <div onClick={() => trocarEtapa("boxDatas")}>
                                <p>Datas</p>
                                <RiErrorWarningFill />
                                <IoIosCheckmarkCircle />
                            </div>
                        </Line>
                        <BoxProjeto id="boxProjeto">
                            <form action="" method="post">
                                <div>
                                    <label>Número do projeto:</label>
                                    <input type="text" id="numeroProjeto"/>

                                    <label>Título do projeto:</label>
                                    <input type="text" id="titulo"/>
                                    <label>Descrição do projeto:</label>
                                    <textarea id="descricao"/>
                                </div>
                                <div ref={ref}>
                                    <Paper elevation={0} {...rootProps}>
                                        <label htmlFor="ata">{fileName ? fileName : "SELECIONAR ARQUIVO"}</label>
                                        <input {...getInputProps()} />
                                    </Paper>
                                    <Button tipo={"Projeto"} text={"Continuar"} />
                                </div>
                            </form>
                        </BoxProjeto>

                        <BoxResponsavel id="boxResponsavel">
                            <form action="" method="post">
                                <div>
                                    <label>Nome do responsável:</label>
                                    <input type="text" id="nome_responsavel"/>

                                    <label>Nome do solicitante:</label>
                                    <input type="text" id="nome_solicitante"/>
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
                                <span onClick={teste}>AAAA</span>
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
                                        { rowDespesas.map(teste =>  teste ) }
                                        { rowDespesas.map(teste => teste.props.number)}
                                        <span><AiFillPlusCircle onClick={() => {
                                            setRowDespesas([...rowDespesas, <RowDespesas number={
                                                rowDespesas[rowDespesas.length - 1].props.number + 1
                                            } />])
                                        }} /></span>
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
                                        {rowCC.map(teste => teste.props.number)}
                                        <span><AiFillPlusCircle onClick={() => {
                                            setRowCC([...rowCC, <RowCcPagantes number={
                                                rowCC[rowCC.length - 1].props.number + 1
                                            } />])
                                        }} /></span>
                                    </div>
                                </Table>
                                <span onClick={teste}>AAAAA</span>
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