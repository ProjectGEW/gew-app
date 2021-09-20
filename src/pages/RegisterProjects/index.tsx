import React, { useState, useEffect,  useCallback } from 'react';

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
import { AiFillPlusCircle, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiDotsCircleHorizontal, HiMinusCircle } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, ContainerRegister, Info, Content, Line } from './styles';

import { ContIcons } from '../components/MenuRight/styles';

import RowDespesas from '../components/RegisterProject/Dinheiro/Row/RowDP';
import RowCcPagantes from '../components/RegisterProject/Dinheiro/Row/RowCC';

import Paper from "@material-ui/core/Paper";

import { useDropzone } from "react-dropzone";

import { Box, BoxConfirm, ContentContainer, TableConfirm } from '../test2/styles';
import { SideContainer } from '../RegisterConsultants/styles';

interface IProjeto {
  infosProjetosInputDTO?: {
    numeroDoProjeto: number;
    titulo: string;
    descricao: string;
    nome_responsavel: string;
    nome_solicitante: string;
    data_de_inicio: string;
    data_de_termino: string;
    data_de_aprovacao: string;    
  },
  despesaInputDTO?: IDespesas[],
  ccPagantesInputDTO?: ICCpagantes[]
}

interface IDespesas {
  nome?: string;
  esforco?: number;
  valor?: number;
}

interface ICCpagantes{
  centro_de_custo_id?: string;
  valor?: number;
}

const RegisterProjects: React.FC = () => {
  const initalValue = {
    infosProjetosInputDTO: {
      numeroDoProjeto: 0,
      titulo: "",
      descricao: "",
      nome_responsavel: "",
      nome_solicitante: "",
      data_de_inicio: "",
      data_de_termino: "",
      data_de_aprovacao: ""
    },
    despesasInputDTO: [
      {
        nome: "",
        esforco: 0,
        valor: 0
      }
    ],
    ccPagantesInputDTO: [
      {
        centro_de_custo_id: "",
        valor: 0
      }
    ]
  }

  initalValue.despesasInputDTO.shift();
  initalValue.ccPagantesInputDTO.shift();

  //Projeto
  const [projeto, setProjeto] = useState<IProjeto>();

  // Ata
  const [file, setFile] = useState<object>();
  // console.log(file);
  const [fileName, setFileName] = useState();

  // Gerar linhas
  const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([<RowDespesas number={1} />]);
  const [rowCC, setRowCC] = useState<JSX.Element[]>([<RowCcPagantes number={1} />]);

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
  // Trocar etapas
  var etapas = ["boxProjeto", "boxResponsavel", "boxDinheiro", "boxDatas"];

  const [etapa, setEtapas] = useState('');

  function trocarEtapa(proxEtapa: string) {
    for (var x = 0; x < 4; x++) {
      document.getElementById(etapas[x])!.style.display = "none";
    }
    document.getElementById(proxEtapa)!.style.display = "block";
    setEtapas(proxEtapa);
  }

  var setarEConfirmar = ["set-data", "confirm-data"];

  function trocarMainEtapa(proxMainEtapa: string) {
    for(let i = 0; i < setarEConfirmar.length; i ++) {
      document.getElementById(setarEConfirmar[i])!.style.display = "none";
    }
    document.getElementById(proxMainEtapa)!.style.display = "flex";
  }

  const [sEsforco, setSEsforco] = useState<number>();
  const [sValorDespesa, setValorDespesa] = useState<number>();

  var somaEsforco = 0;
  var somaValorDespesa = 0;

  function somaTotal() {
    for (let i = 1; i <= rowDespesas.length; i++) {
      somaEsforco += parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value);
      somaValorDespesa += parseInt((document.getElementById(`valor${i}`) as HTMLInputElement).value);

      setSEsforco(somaEsforco);
      setValorDespesa(somaValorDespesa);
    }
  };


  async function setInfos(){
    initalValue.infosProjetosInputDTO["numeroDoProjeto"] = parseInt((document.getElementById("numeroProjeto") as HTMLInputElement).value);
    initalValue.infosProjetosInputDTO["titulo"] = (document.getElementById("titulo") as HTMLInputElement).value;
    initalValue.infosProjetosInputDTO["descricao"] = (document.getElementById("descricao") as HTMLTextAreaElement).value;

    initalValue.infosProjetosInputDTO.nome_responsavel = (document.getElementById("nome_responsavel") as HTMLInputElement).value;
    initalValue.infosProjetosInputDTO.nome_solicitante = (document.getElementById("nome_solicitante") as HTMLInputElement).value;

    initalValue.infosProjetosInputDTO.data_de_inicio = (document.getElementById("data_de_inicio") as HTMLInputElement).value;
    initalValue.infosProjetosInputDTO.data_de_termino = (document.getElementById("data_de_termino") as HTMLInputElement).value;
    initalValue.infosProjetosInputDTO.data_de_aprovacao = (document.getElementById("data_de_aprovacao") as HTMLInputElement).value;

    for (let i = 1; i <= rowDespesas.length; i++) {
      initalValue.despesasInputDTO.push(
        {
          nome: (document.getElementById(`despesa${i}`) as HTMLInputElement).value,
          esforco: parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value),
          valor: parseFloat((document.getElementById(`valor${i}`) as HTMLInputElement).value)
        }
      )
    };

    for (let i = 1; i <= rowCC.length; i++) {
      initalValue.ccPagantesInputDTO.push(
        {
          centro_de_custo_id: (document.getElementById(`centro${i}`) as HTMLInputElement).value,
          valor: parseFloat((document.getElementById(`valorC${i}`) as HTMLInputElement).value)
        }
      )
    };
    
    setProjeto(initalValue);
    somaTotal();
    return initalValue;
  }

  function setNovaLinhaDP() {
    setRowDespesas(
      [...rowDespesas, 
       <RowDespesas number={ rowDespesas[rowDespesas.length - 1].props.number + 1 } />
      ]
    );
    return rowDespesas;
  }

  function deleteLastRowDP() {
    document.getElementById(`D${rowDespesas[rowDespesas.length - 1].props.number}`)!.style.display = "none";
    rowDespesas.pop();
    setRowDespesas([...rowDespesas]);
    return rowDespesas;
  }

  function setNovaLinhaCC(){
    setRowCC(
      [...rowCC, <RowCcPagantes number={rowCC[rowCC.length - 1].props.number + 1} />]
    );
    return rowCC;
  }

  function deleteLastRowCC(){
    document.getElementById(`C${rowCC[rowCC.length - 1].props.number}`)!.style.display = "none";
    rowCC.pop();
    setRowCC(rowCC);
    return rowCC;
  }

  function trocarTabela() {
    const recebe = document.getElementById("tableOne")!.style.display;

    if(recebe === 'block' || recebe === '') {
      document.getElementById("tableTwo")!.style.display = "block";
      document.getElementById("tableOne")!.style.display = "none";

      document.getElementById("choose")!.style.marginLeft = "-55vw";
      document.getElementById("choose")!.style.transform = "rotate(180deg)";
  
    } else {
      document.getElementById("tableOne")!.style.display = "block";
      document.getElementById("tableTwo")!.style.display = "none";

      document.getElementById("choose")!.style.marginLeft = "54vw";
      document.getElementById("choose")!.style.transform = "rotate(0deg)";
    }
  }

  return (
    <>
    <Navbar />
    <MenuLeft />
    <Container id="set-data" >
      <ContainerRegister>
        <Info>
          <h1>Cadastrar Projeto</h1>
        </Info>
        <Content>
          
          <Line nome={etapa}>
            <div onClick={() => trocarEtapa("boxProjeto")}>
              <p>Projeto</p>
              <RiErrorWarningFill />
              <HiDotsCircleHorizontal />
              <IoIosCheckmarkCircle />
            </div>
            <div onClick={() => trocarEtapa("boxResponsavel")}>
              <p>Responsáveis</p>
              <RiErrorWarningFill />
              <HiDotsCircleHorizontal />
              <IoIosCheckmarkCircle />
            </div>
            <div onClick={() => trocarEtapa("boxDinheiro")}>
              <p>R$</p>
              <RiErrorWarningFill />
              <HiDotsCircleHorizontal />
              <IoIosCheckmarkCircle />
            </div>
            <div onClick={() => trocarEtapa("boxDatas")}>
              <p>Datas</p>
              <RiErrorWarningFill />
              <HiDotsCircleHorizontal />
              <IoIosCheckmarkCircle />
            </div>
          </Line>
          <BoxProjeto id="boxProjeto">
            <span>
              <div>
                <label>Número do projeto:</label>
                <input type="number" id="numeroProjeto" />

                <label>Título do projeto:</label>
                <input type="text" id="titulo" />

                <label>Descrição do projeto:</label>
                <textarea id="descricao" />
              </div>
              <div ref={ref}>
                <Paper elevation={0} {...rootProps}>
                  <label htmlFor="ata">{fileName ? fileName : "SELECIONAR ARQUIVO"}</label>
                  <input {...getInputProps()} />
                </Paper>
              </div>
            </span>
          </BoxProjeto>
          <BoxResponsavel id="boxResponsavel">
            <span>
              <div>
                <label>Nome do responsável:</label>
                <input type="text" id="nome_responsavel" />

                <label>Nome do solicitante:</label>
                <input type="text" id="nome_solicitante" />
              </div>
              <div>
                <label>Seção do responsável:</label>
                <input type="text" />
                <Button tipo={"Lupa"} text={""} />

                <label>Seção do solicitante:</label>
                <input type="text" />
                <Button tipo={"Lupa"} text={""} />
              </div>
            </span>
          </BoxResponsavel>


          <BoxDinheiro id="boxDinheiro">
            <form action="" method="post">

              <Table id="tableOne">
                <div id="first-table">
                  <h1>Despesas (desembolsos)</h1>
                  <h1>Esforço</h1>
                  <h1>Valor (R$)</h1>
                </div>
                <div id="first-scroll">
                  {rowDespesas.map(teste => teste)}
                  <span><AiFillPlusCircle onClick={() => setNovaLinhaDP()} /></span>
                  <Total>
                    <h2>TOTAL:</h2>
                    <input id="totalEsforco" type="text" value="1500h" className="alinhar" />
                    <input id="totalValor" type="text" value={sEsforco? sEsforco: 0} className="alinhar" />
                    <div onClick={() => deleteLastRowDP()}>TESTE</div>
                  </Total>
                </div>
              </Table>

              <Table id="tableTwo">
                <div id="second-table">
                  <h1>Centro de Custo</h1>
                  <h1>Responsável</h1>
                  <h1>Percentual</h1>
                  <h1>Valor (R$)</h1>
                </div>
                <div id="second-scroll">
                  {rowCC.map(teste => teste)}
                  <span><AiFillPlusCircle onClick={() => setNovaLinhaCC()} /></span>
                </div>
                <div onClick={() => deleteLastRowCC()}>TESTE</div>
              </Table>
              <MdKeyboardArrowRight id="choose" onClick={trocarTabela} />
            </form>
          </BoxDinheiro>


          <BoxDatas id="boxDatas">
            <span>
              <div>
                <label>Data de ínicio:</label>
                <label>Data de término:</label>
                <label>Data de aprovação:</label>
              </div>
              <div>
                <input type="text" defaultValue="1/01/2001" id="data_de_inicio" />
                <input type="text" defaultValue="1/01/2001" id="data_de_termino" />
                <input type="text" defaultValue="1/01/2001" id="data_de_aprovacao" />
              </div>
            </span>
          </BoxDatas>
          <span onClick={() => {
            trocarMainEtapa("confirm-data");
            setInfos();
          }}>
            <Button tipo={"continuarCadastro"} text={"Continuar"}/>
          </span>
        </Content>
      </ContainerRegister>
      </Container >
      <BoxConfirm id="confirm-data"> 
      <h1>Confirmar Informações</h1>
            <SideContainer>
                <ContentContainer>
                    <div>
                        <h3>Número do projeto:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.numeroDoProjeto}</h2>
                    </div>
                </ContentContainer>
                <Box>
                    <div>
                        <h3>Título do projeto:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.titulo}</h2>
                    </div>
                </Box>
                <Box>
                    <div>
                        <h3>Descrição do projeto:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.descricao}</h2>
                    </div>
                </Box>
                <ContentContainer>
                    <div>
                        <h3>Nome do responsável:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.nome_responsavel.toUpperCase()}</h2>
                    </div>
                    <div>
                        <h3>Seção do responsável:</h3>
                        <h2>ABCDEFGHIJKLM</h2>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div>
                        <h3>Nome do solicitante:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.nome_solicitante.toUpperCase()}</h2>
                    </div>
                    <div>
                        <h3>Seção do solicitante:</h3>
                        <h2>NOPQRSTUVWXYZ</h2>
                    </div>
                </ContentContainer>
            </SideContainer>
            <SideContainer>
                <ContentContainer>
                    <div>
                        <h3>Valor total de despesas: </h3>
                        <h2>R$ {sValorDespesa}</h2>
                    </div>
                    <div>
                        <h3>Data de início:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.data_de_inicio}</h2>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div>
                        <h3>Limite de horas aprovadas:</h3>
                        <h2>{sEsforco}</h2>
                    </div>
                    <div>
                        <h3>Data de término:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.data_de_termino}</h2>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div>
                    </div>
                    <div>
                        <h3>Data de aprovação:</h3>
                        <h2>{projeto?.infosProjetosInputDTO?.data_de_aprovacao}</h2>
                    </div>
                </ContentContainer>

                <TableConfirm>
                    <div>
                        <p>Funcionários alocados</p>
                        <AiOutlineUsergroupAdd />
                    </div>    
                    <ul>                    
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                        <li>
                            <p>Heloise Stefany Bianchi</p>
                            <HiMinusCircle />
                        </li>
                    </ul>
                </TableConfirm>
            </SideContainer>
            <Button  tipo={"Confirmar"} text={"Confirmar"} />
    </BoxConfirm> 
    <MenuRight>
      <ContIcons />
    </MenuRight>
    </>
  );
};

export default RegisterProjects;