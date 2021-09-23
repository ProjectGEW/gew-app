import React, { useState, useCallback } from 'react';
import Paper from "@material-ui/core/Paper";
import Calendar from 'react-calendar';

import { useDropzone } from "react-dropzone";

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import Button from '../components/Button';

import analisaValor from '../../utils/analisaValor';

import RowDespesas from '../components/RegisterProject/Dinheiro/Row/RowDP';
import RowCcPagantes from '../components/RegisterProject/Dinheiro/Row/RowCC';

import { BoxProjeto } from '../components/RegisterProject/Projeto/styles';
import { BoxResponsavel } from '../components/RegisterProject/Responsavel/styles';
import { BoxDinheiro, Table, Total } from '../components/RegisterProject/Dinheiro/styles';
import { BoxDatas } from '../components/RegisterProject/Datas/styles';
import { ContIcons } from '../components/MenuRight/styles';
import Footer from '../components/Footer';
import 'react-calendar/dist/Calendar.css';

import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosCheckmarkCircle, IoMdRemoveCircle } from 'react-icons/io';
import { AiFillPlusCircle, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiDotsCircleHorizontal, HiMinusCircle, HiArrowNarrowLeft } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiPauseCircleFill } from 'react-icons/ri';

import { Container, ContainerRegister, Info, Content, Line, Error } from './styles';

import { Box, BoxConfirm, ContentContainer, TableConfirm, SideContainer } from '../test2/styles';

//import { SideContainer } from '../RegisterConsultants/styles';

import api from "../../service/api";

interface IProjetoResponse {
  id: number;
}

interface IProjeto {
  infoProjetosInputDTO?: {
    numeroDoProjeto: number;
    titulo: string;
    descricao: string;
    nome_responsavel: string;
    nome_solicitante: string;
    data_de_inicio: string;
    data_de_termino: string;
    data_de_aprovacao: string;    
  },
  despesasInputDTOS?: IDespesas[],
  ccPagantesInputDTO?: ICCpagantes[]
}

interface IDespesas {
  nome?: string;
  esforco?: number;
  valor?: number;
}

interface ICCpagantes{
  secao_id?: number;
  valor?: number;
}

const RegisterProjects: React.FC = () => {
  const initalValue = {
    infoProjetosInputDTO: {
      numeroDoProjeto: 0,
      titulo: "",
      descricao: "",
      nome_responsavel: "",
      nome_solicitante: "",
      data_de_inicio: "",
      data_de_termino: "",
      data_de_aprovacao: ""
    },
    despesasInputDTOS: [
      {
        nome: "",
        esforco: 0,
        valor: 0
      }
    ],
    ccPagantesInputDTO: [
      {
        secao_id: 0,
        valor: 0
      }
    ]
  }

  initalValue.despesasInputDTOS.shift();
  initalValue.ccPagantesInputDTO.shift();

  //Projeto
  const [projeto, setProjeto] = useState<IProjeto>();
  //console.log(projeto);
  // Ata
  const [file, setFile] = useState<Blob>();
  //console.log(file);
  const [fileName, setFileName] = useState<string>();

  const [errorInput, setErrorInput] = useState<boolean>();

  // Gerar linhas
  const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([<RowDespesas number={1} />]);
  const [rowCC, setRowCC] = useState<JSX.Element[]>([<RowCcPagantes number={1} />]);

  const onDrop = useCallback((acceptedFiles) => {
    //console.log(acceptedFiles)
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
  const [sValorCcPagantes, setValorCcPagantes] = useState<number>();

  function somaTotal() {
    var somaEsforco = 0;
    var somaValorDespesa = 0;

    var somaValorCcPagantes = 0;

    for (let i = 1; i <= rowDespesas.length; i++) {
      somaEsforco += parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value);
      somaValorDespesa += parseInt((document.getElementById(`valor${i}`) as HTMLInputElement).value);

      setSEsforco(somaEsforco);
      setValorDespesa(somaValorDespesa);
    }

    for (let i = 1; i <= rowCC.length; i++) {
      somaValorCcPagantes += parseInt((document.getElementById(`valorC${i}`) as HTMLInputElement).value);
      setValorCcPagantes(somaValorCcPagantes);
    }
  };


  async function setInfos(){
    initalValue.infoProjetosInputDTO["numeroDoProjeto"] = parseInt((document.getElementById("numeroProjeto") as HTMLInputElement).value);
    initalValue.infoProjetosInputDTO["titulo"] = (document.getElementById("titulo") as HTMLInputElement).value;
    initalValue.infoProjetosInputDTO["descricao"] = (document.getElementById("descricao") as HTMLTextAreaElement).value;

    initalValue.infoProjetosInputDTO.nome_responsavel = (document.getElementById("nome_responsavel") as HTMLInputElement).value;
    initalValue.infoProjetosInputDTO.nome_solicitante = (document.getElementById("nome_solicitante") as HTMLInputElement).value;

    initalValue.infoProjetosInputDTO.data_de_inicio = (document.getElementById("data_de_inicio") as HTMLInputElement).value;
    initalValue.infoProjetosInputDTO.data_de_termino = (document.getElementById("data_de_termino") as HTMLInputElement).value;
    initalValue.infoProjetosInputDTO.data_de_aprovacao = (document.getElementById("data_de_aprovacao") as HTMLInputElement).value;

    for (let i = 1; i <= rowDespesas.length; i++) {
      initalValue.despesasInputDTOS.push(
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
          secao_id: parseInt((document.getElementById(`centro${i}`) as HTMLInputElement).value),
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
    if (rowDespesas.length > 1) {
      document.getElementById(`D${rowDespesas[rowDespesas.length - 1].props.number}`)!.style.display = "none";
      rowDespesas.pop();
      setRowDespesas([...rowDespesas]);
      return rowDespesas;
    }
    setRowDespesas([...rowDespesas]);
    return rowDespesas;
  }

  function setNovaLinhaCC(){
    setRowCC(
      [...rowCC, <RowCcPagantes number={rowCC[rowCC.length - 1].props.number + 1}/>]
    );
    return rowCC;
  }

  function deleteLastRowCC(){
    if (rowCC.length > 1) {
      document.getElementById(`C${rowCC[rowCC.length - 1].props.number}`)!.style.display = "none";
      rowCC.pop();
      setRowCC([...rowCC]);
      return rowCC;
    }
    setRowCC([...rowCC]);
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

  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<string>();
  const [dataInicio, setDataInicio] = useState<string>();
  const [dataFim, setDataFim] = useState<string>();
  const [dataAprovacao, setDataAprovacao] = useState<string>();
  const [inputErrorInit, setInputErrorInit] = useState('');
  const [inputErrorFim, setInputErrorFim] = useState('');
  const [inputErrorAprov, setInputErrorAprov] = useState('');

  function setData(value: Date) {
    const dataFormat = value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear();
    if (selected === "inicio") {
        if (value.getFullYear() >= new Date().getFullYear()) {
            setDataInicio(dataFormat);
            setInputErrorInit("");
        } else {
            setInputErrorInit("Ano inválido");
        }
    } else if (selected === "fim") {
        const validation = dataInicio ? true : false;
        const anoValidation = value.getFullYear() >= parseInt(dataInicio ? dataInicio.split("/")[2] : "") 
        || value.getFullYear() <= new Date().getFullYear() + 100;
        const mesValidation = value.getMonth() + 1 >= parseInt(dataInicio ? dataInicio.split("/")[1] : "");
        const diaValidation = value.getDate() > parseInt(dataInicio ? dataInicio.split("/")[0] : "");
        if (validation) {
          if (anoValidation) {
              if (mesValidation) {
                  if (diaValidation) {
                      setDataFim(dataFormat);
                      setInputErrorFim("");
                  } else {
                      setInputErrorFim("Dia inválido");
                  }
              } else {
                  setInputErrorFim("Mês inválido");
              }
          } else {
              setInputErrorFim("Ano inválido");
          }
        } else {
          setInputErrorFim("Informe primeiro a data de inicio");
        }
    } else if (selected === "aprovacao") {
        const validation = value.getFullYear() >= new Date().getFullYear() - 1;
        const diaValidation = value.getDate() <= parseInt(dataInicio ? dataInicio.split("/")[0] : "");
        if (validation) { 
          if (diaValidation) {
            setDataAprovacao(dataFormat);
            setInputErrorAprov("");
          } else {
            setInputErrorAprov("Dia inválido");
          }
        } else {
            setInputErrorAprov("Ano inválido");
        }
    }
  }

  const handleProjects = useCallback( async () => {
    try {
      const response = await api.post<IProjetoResponse>("projetos", projeto);
      const data = response.data;
      const formData = new FormData();

      formData.append("file", file ? file : "");

      await api.post(`files/upload/${data.id}`, formData);
    } catch (err) {
      console.log(err);
    }
  }, [projeto, file]);

return (
  <>
    <Navbar />
    <MenuLeft />
    <Container id="set-data" >
      <ContainerRegister id="ContainerRegister">
        <Info>
          <h1>Cadastrar Projeto</h1>
        </Info>
        <Content id="content">
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
              <div id="left-box">
                <label>Número do projeto:</label>
                {/* props.target.value */}
                <input type="number" id="numeroProjeto" />
                <label>Título do projeto: </label>
                <input type="text" id="titulo" />

                <label>Descrição do projeto:</label>
                <textarea id="descricao" />
              </div>
              <div ref={ref}>
                <Paper elevation={0} {...rootProps}>
                  <label htmlFor="ata">{fileName ? fileName : "SELECIONAR ARQUIVO"}</label>
                  <input id="btnUpload" {...getInputProps()} />
                </Paper>
              </div>
            </span>
            <span onClick={() => {
              return;
              trocarEtapa("boxResponsavel")}}><Button  tipo={"etapaProjeto"} text={"Continuar"} /></span>
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
            <span onClick={() => trocarEtapa("boxDinheiro")}><Button  tipo={"etapaResponsaveis"} text={"Continuar"} /></span>
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
                  <div>
                      <h2>REMOVER LINHA:</h2>
                      <IoMdRemoveCircle onClick={() => deleteLastRowDP()} />
                    </div>
                    <h2>TOTAL:</h2>
                    <input id="totalEsforco" type="text" value={sEsforco? sEsforco: 0} className="alinhar" />
                    <input id="totalValor" type="text" value={sValorDespesa? analisaValor(sValorDespesa): 0} className="alinhar" />
                    <RiPauseCircleFill id="soma" onClick={() => somaTotal()}/>
                  </Total>
                </div>
              </Table>
              <Table id="tableTwo">
                <div id="second-table">
                  <h1>Centro de Custo</h1>
                  <h1>Responsável</h1>
                  <h1>Valor (R$)</h1>
                </div>
                <div id="second-scroll">
                  {rowCC.map(teste => teste)}
                  <span><AiFillPlusCircle onClick={() => setNovaLinhaCC()} /></span>
                  <div id="remove">
                    <h2>REMOVER LINHA:</h2>
                    <IoMdRemoveCircle onClick={() => deleteLastRowCC()} />
                  </div>
                </div>
              </Table>
              <MdKeyboardArrowRight id="choose" onClick={trocarTabela} />
            </form>
            <span onClick={() => trocarEtapa("boxDatas")}><Button  tipo={"etapaDinheiro"} text={"Continuar"} /></span>
          </BoxDinheiro>
          <BoxDatas hasErrorAprovacao={!!inputErrorAprov} hasErrorFim={!!inputErrorFim} hasErrorInicio={!!inputErrorInit} id="boxDatas">
            <span className="spanDatas">
              <div className="divDatas">
                <label>Data de ínicio:</label>
                <label>Data de término:</label>
                <label>Data de aprovação:</label>
              </div>
              <div className="divDatas">
                <input type="text" value={dataInicio} id="data_de_inicio" defaultValue="01/01/2001" onClick={() => {setSelected("inicio")}} />
                <input type="text" value={dataFim} id="data_de_termino" defaultValue="01/01/2001" onClick={() => {setSelected("fim")}} />
                <input type="text" value={dataAprovacao} id="data_de_aprovacao" defaultValue="01/01/2001" onClick={() => {setSelected("aprovacao")}} />
              </div>

              <div>
                  {inputErrorInit && <Error localErro={selected}>{inputErrorInit}</Error>}
                  {inputErrorFim && <Error localErro={selected}>{inputErrorFim}</Error>}
                  {inputErrorAprov && <Error localErro={selected}>{inputErrorAprov}</Error>}
              </div>
          </span>
          <Calendar className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => {setData(props)}} />
          <span onClick={() => {
            trocarMainEtapa("confirm-data");
            setInfos();
          }}>
          <Button tipo={"continuarCadastro"} text={"Confirmar"}/>
        </span>
        </BoxDatas>
        <Footer tipo={"register_project"} ></Footer>
        
      </Content>
    </ContainerRegister>
  </Container >
  <BoxConfirm id="confirm-data"> 
    <h1>Confirmar Informações</h1>
      <SideContainer>
        <ContentContainer>
          <div>
            <h3>Número do projeto:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.numeroDoProjeto}</h2>
          </div>
          <div>
            <h3>Ata da aprovação:</h3>
            <h2>{fileName ? fileName.split(".")[0] : "Sem ATA"}</h2>
          </div>
        </ContentContainer>
        <Box>
          <div>
            <h3>Título do projeto:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.titulo}</h2>
          </div>
        </Box>
        <Box>
          <div>
            <h3>Descrição do projeto:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.descricao}</h2>
          </div>
        </Box>
        <ContentContainer>
          <div>
            <h3>Nome do responsável:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.nome_responsavel}</h2>
          </div>
          <div>
            <h3>Seção do responsável:</h3>
            <h2>ABCDEFGHIJKLM</h2>
          </div>
        </ContentContainer>
        <ContentContainer>
          <div>
            <h3>Nome do solicitante:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.nome_solicitante}</h2>
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
            <h2>{analisaValor(sValorDespesa ? sValorDespesa : 0)}</h2>
          </div>
          <div>
            <h3>Data de início:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.data_de_inicio}</h2>
          </div>
        </ContentContainer>
        <ContentContainer>
          <div>
            <h3>Centro de custo:</h3>
            <h2>{analisaValor(sValorCcPagantes ? sValorCcPagantes: 0)}</h2>
          </div>
          <div>
            <h3>Data de término:</h3>
              <h2>{projeto?.infoProjetosInputDTO?.data_de_termino}</h2>
          </div>
        </ContentContainer>
        <ContentContainer>
          <div>
            <h3>Limite de horas aprovadas:</h3>
            <h2>{sEsforco}</h2>
          </div>
          <div>
            <h3>Data de aprovação:</h3>
            <h2>{projeto?.infoProjetosInputDTO?.data_de_aprovacao}</h2>
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
      <HiArrowNarrowLeft id="voltar" onClick={() => trocarMainEtapa("set-data")}/>
      <Footer tipo={"confirm_project"} ></Footer>
      <div onClick={handleProjects}>
        <Button  tipo={"Confirmar"} text={"Confirmar"} /> 
      </div>
    </BoxConfirm> 
  <MenuRight>
    <ContIcons />
  </MenuRight>
</>
);
};

export default RegisterProjects;