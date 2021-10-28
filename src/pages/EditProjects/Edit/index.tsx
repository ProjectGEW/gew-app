import React, { useState, useCallback, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import Calendar from 'react-calendar';
import { useHistory, useParams } from 'react-router-dom';
import { useDropzone } from "react-dropzone";

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import Button from '../../components/Button';

import analisaValor from '../../../utils/analisaValor';

import RowDespesas from '../../components/RegisterProject/Dinheiro/Row/RowDP';
import RowCcPagantes from '../../components/RegisterProject/Dinheiro/Row/RowCC';

import { BoxProjeto, Preview } from '../../components/RegisterProject/Projeto/styles';
import { BoxResponsavel } from '../../components/RegisterProject/Responsavel/styles';
import { BoxDinheiro, Table, Total } from '../../components/RegisterProject/Dinheiro/styles';
import { BoxDatas } from '../../components/RegisterProject/Datas/styles';
import { ContIcons } from '../../components/MenuRight/styles';
import Footer from '../../components/Footer';
import 'react-calendar/dist/Calendar.css';

import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiMinusCircle, HiArrowNarrowLeft } from 'react-icons/hi';
import { RiPauseCircleFill } from 'react-icons/ri';

import { Container, ContainerRegister, Info, Content, Error, LinhaTitulo } from './styles';

import { Box, BoxConfirm, ContentContainer, TableConfirm, SideContainer } from '../../test2/styles';

import api from "../../../service/api";

import { successfulNotify, errorfulNotify } from '../../../hooks/SystemToasts'
import { vrfCampo, validacaoDosCamposCadastros } from '../../../utils/confereCampo';

interface ISecaoResponse {
  nome: string;
}

interface IProjetoResponse {
  numeroDoProjeto: number;
}

interface CardContent {
    infoprojetoDTO : {
        id: number;
        numeroDoProjeto: number;
        titulo: string;
        descricao: string;
        data_de_inicio: string;
        data_de_termino: string;
        data_de_aprovacao: string;
        status: string;
        responsavel: IFuncionario;
        solicitante: IFuncionario;
        horas_apontadas: number;
        secao: string;
    };
    valoresTotaisDTO : {
        valorTotalCcPagantes: number;
        valorTotalDespesas: number;
        valorTotalEsforco: number;
    };      
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

interface IFuncionario {
  nome:string;
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

    const [data, setData] = useState("");
    const { numeroDoProjeto }: {numeroDoProjeto: string}  = useParams();
    function teste() {
        setData((document.getElementById("ata") as HTMLInputElement).value);
        console.log(data.substring(12, -1));
    }
    //Projeto
    const [projetoEdit, setProjetoEdit] = useState<CardContent>();
    useEffect(() => {
      api.get<CardContent>(`/projetos/${numeroDoProjeto}`).then((response => {
            setProjetoEdit(response.data);
      }))
    }, [numeroDoProjeto]);
  const history = useHistory();


  //console.log(projeto);
  // Ata
  const [file, setFile] = useState<Blob>();
  //console.log(file);
  const [fileName, setFileName] = useState<string>('');

  //const [errorInput, setErrorInput] = useState<boolean>();

  // Gerar linhas
  const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([<RowDespesas number={1} />]);
  const [rowCC, setRowCC] = useState<JSX.Element[]>([<RowCcPagantes number={1} />]);

  const onDrop = useCallback((acceptedFiles) => {
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
    if (proxEtapa === "boxDinheiro") {
      document.getElementById("btnDin")!.style.display = "block";
    } else if (proxEtapa === "boxDatas" || proxEtapa === "boxResponsavel" || proxEtapa === "boxProjeto") {
      document.getElementById("btnDin")!.style.display = "none";
    }

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

  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<string>();
  const [dataInicio, setDataInicio] = useState<string>();
  const [dataFim, setDataFim] = useState<string>();
  const [dataAprovacao, setDataAprovacao] = useState<string>();
  const [inputErrorInit, setInputErrorInit] = useState('');
  const [inputErrorFim, setInputErrorFim] = useState('');
  const [inputErrorAprov, setInputErrorAprov] = useState('');

  function setDataA(value: Date) {
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
  
//   const handleProjects = useCallback( async () => {
//     try {
//       await api
//       .post<IProjetoResponse>("projetos", projetoEdit)
//       .then((response) => {
//         const formData = new FormData();

//         formData.append("file", file ? file : "");
//         api.post(`files/upload/${response.data.numeroDoProjeto}`, formData);

//         history.push('/projects');
//         successfulNotify('Projeto cadastrado com sucesso!');
//       })
//       .catch((e) => console.log(e.response.data.titulo));
//     } catch (e) { 
//       console.log(`Error: ${e}`);
//       errorfulNotify('Não foi possivel realizar o cadastro do projeto!'); 
//     }
//   }, [projeto, file, history]);

  const [secaoSolicitante, setSecaoSolicitante] = useState('');
  const [secaoResponsavel, setSecaoResponsavel] = useState('');
  
  async function handleSecao(nome: string, campo: string){ 
    try {
      const response = await api.get<ISecaoResponse>(`secoes/nome/${nome}`);
      const data = response.data;
      (document.getElementById(campo) as HTMLInputElement).value = data.nome;

      if (campo === "secao_solicitante"){
        setSecaoSolicitante(data.nome);
      }
      if (campo === "secao_responsavel"){
        setSecaoResponsavel(data.nome);
      }

    } catch (err) {
      console.log(err);
    }
  }

  function secao() {
    handleSecao(projetoEdit?.infoprojetoDTO.responsavel.nome ? projetoEdit?.infoprojetoDTO.responsavel.nome: "" , "secao_responsavel");
    handleSecao(projetoEdit?.infoprojetoDTO.solicitante.nome ? projetoEdit?.infoprojetoDTO.solicitante.nome: "" , "secao_solicitante")
  }

  const [verificaCliqueAta, setVerificaCliqueAta] = useState(false);

  useEffect(() => {
    if(verificaCliqueAta === true && fileName === '') {
      document.getElementById("ataResponse")!.innerHTML = "ATA obrigatória*";
    } else if(fileName !== '') {
      if(file?.type !== 'application/pdf') {
        document.getElementById("ataResponse")!.innerHTML = "Selecione um PDF*";  
        setFile(undefined);
        setFileName('');
      } else {
        document.getElementById("ataResponse")!.innerHTML = "";  
      }
    }
  }, [verificaCliqueAta, fileName]);

return (
  <>
    <Navbar />
    <MenuLeft />
    <Container id="set-data" onLoad={secao}>
      <ContainerRegister id="ContainerRegister">
        <Info>
          <h1>Cadastrar Projeto</h1>
        </Info>
        <Content id="content">
          <LinhaTitulo>
            <h1>
              Descrição geral do projeto
            </h1>
          </LinhaTitulo>
          <BoxProjeto id="boxProjeto">
            <span> 
              <div id="left-box">
                <label>Número do projeto:</label>
                <input type="number" id="numeroProjeto" disabled value={projetoEdit?.infoprojetoDTO.numeroDoProjeto}/>
                <label>Título do projeto: </label>
                <input type="text" id="titulo" 
                  defaultValue={projetoEdit?.infoprojetoDTO.titulo}
                  onBlur={(props) => { vrfCampo(props.target.value, "titulo", "tituloResponse"); }}
                />
                <p id="tituloResponse" className="msgErro"></p>
                <label>Descrição do projeto:</label>
                <textarea id="descricao" 
                  defaultValue={projetoEdit?.infoprojetoDTO.descricao}
                  onBlur={(props) => { vrfCampo(props.target.value, "descricao", "descricaoResponse"); }}/>
                <p id="descricaoResponse" className="msgErro"></p>
              </div>
              <div ref={ref} onClick={() => setVerificaCliqueAta(true)}>
                <Paper elevation={0} {...rootProps}>
                  <label id="ata" htmlFor="ata">{fileName ? fileName : "SELECIONAR ARQUIVO"}</label>
                  <input id="btnUpload" {...getInputProps()} type="file" accept="application/pdf" />
                </Paper>
                <p id="ataResponse" className="msgErro"></p>
              </div>
            </span>
            {file ?
              <Preview src={file ? URL.createObjectURL(file) : file}/>
            : <Preview src={'null'}/>
            }
          </BoxProjeto>
          <LinhaTitulo>
            <h1>
              Responsável e solicitante
            </h1>
          </LinhaTitulo>
          <BoxResponsavel id="boxResponsavel">
            <span>
              <div>
                <label>Nome do responsável:</label>
                <input type="text" id="nome_responsavel"
                  defaultValue={projetoEdit?.infoprojetoDTO.responsavel.nome} 
                  onBlur={(props) => {
                  if (props.target.value !== "") {
                    handleSecao(props.target.value, "secao_responsavel"); 
                  }
              
                  vrfCampo(props.target.value, "nome_responsavel", "responsavelResponse");
                }}/>
                <p id="responsavelResponse" className="msgErro"></p>
                <label>Nome do solicitante:</label>
                <input type="text" id="nome_solicitante" 
                  defaultValue={projetoEdit?.infoprojetoDTO.solicitante.nome}
                  onBlur={(props) =>  {
                  if (props.target.value !== "") {
                    handleSecao(props.target.value, "secao_solicitante");
                  }

                  vrfCampo(props.target.value, "nome_solicitante", "solicitanteResponse");
                }}/>
                <p id="solicitanteResponse" className="msgErro"></p>
              </div>
              <div>
                <label>Seção do responsável:</label>
                <input type="text" defaultValue={secaoResponsavel} id="secao_responsavel" />
                <label id="label_secao_solicitante">Seção do solicitante:</label>
                <input type="text" defaultValue={secaoSolicitante} id="secao_solicitante"/>
              </div>
            </span>
          </BoxResponsavel>
          <LinhaTitulo>
            <h1>
              Centro de Custos & Despesas
            </h1>
          </LinhaTitulo>
          <BoxDinheiro id="boxDinheiro">
            <Table>
              <div className="table">
                <h1>Despesas (desembolsos)</h1>
                <h1>Esforço</h1>
                <h1>Valor (R$)</h1>
              </div>
              <div id="scroll">
                {rowDespesas.map(linha => linha)}
              </div>
              <Total>
                <div>
                  <button onClick={() => setNovaLinhaDP()}>Adicionar</button>
                  <button onClick={() => deleteLastRowDP()}>Remover</button>
                </div>
                <div>
                  <h2>TOTAL:</h2>
                  <input id="totalEsforco" type="text" disabled value={sEsforco? sEsforco: 0}/>
                  <input id="totalValor" type="text" disabled value={sValorDespesa? analisaValor(sValorDespesa): 0}/>
                  <RiPauseCircleFill id="soma" onClick={() => somaTotal()}/>
                </div>
              </Total>
            </Table>
            <Table id="tableTwo">
              <div className="table">
                <h1>Centro de Custo</h1>
                <h1>Responsável</h1>
                <h1>Valor (R$)</h1>
              </div>
              <div id="scroll">
                {rowCC.map(linha => linha)}
              </div>
              <Total>
                <div>
                  <button onClick={() => setNovaLinhaCC()}>Adicionar</button>
                  <button onClick={() => deleteLastRowCC()}>Remover</button>
                </div>
                <div>
                  <h2>TOTAL:</h2>
                  <input id="totalValor" type="text" value={0} />
                  <RiPauseCircleFill id="soma" onClick={() => somaTotal()}/>
                </div>
              </Total>
            </Table>
          </BoxDinheiro>
        <LinhaTitulo>
          <h1>
            Datas  
          </h1>
        </LinhaTitulo>
        <BoxDatas hasErrorAprovacao={!!inputErrorAprov} hasErrorFim={!!inputErrorFim} hasErrorInicio={!!inputErrorInit} id="boxDatas">
          <span className="spanDatas">
            <div className="divDatas">
              <label>Data de ínicio:</label>
              <label>Data de término:</label>
              <label>Data de aprovação:</label>
            </div>
            <div className="divDatas">
              <input type="text" value={dataInicio} id="data_de_inicio" 
                onClick={() => {setSelected("inicio")}} 
                defaultValue={projetoEdit?.infoprojetoDTO.data_de_inicio}
                onBlur={(props) => {
                  if (props.target.value === "") {
                    props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                    return;
                  }
                  props.target.style.border = "";
                }}
              />
              <input type="text" value={dataFim} id="data_de_termino" 
                onClick={() => {setSelected("fim")}}
                defaultValue={projetoEdit?.infoprojetoDTO.data_de_termino}
                onBlur={(props) => {
                  if (props.target.value === "") {
                    props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                    return;
                  }
                  props.target.style.border = "";
                }} 
              />
              <input type="text" value={dataAprovacao} id="data_de_aprovacao" 
                onClick={() => {setSelected("aprovacao")}} 
                defaultValue={projetoEdit?.infoprojetoDTO.data_de_aprovacao}
                onBlur={(props) => {
                  if (props.target.value === "") {
                    props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                    return;
                  }
                  props.target.style.border = "";
                }}    
              />
            </div>
            <div>
              {inputErrorInit && <Error localErro={selected}>{inputErrorInit}</Error>}
              {inputErrorFim && <Error localErro={selected}>{inputErrorFim}</Error>}
              {inputErrorAprov && <Error localErro={selected}>{inputErrorAprov}</Error>}
            </div>
          </span>
          <Calendar className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => {setDataA(props)}} />
          <button onClick={() => validacaoDosCamposCadastros(rowDespesas.length, rowCC.length)}> 
          TESTE
          </button>
        </BoxDatas>
      </Content>
    </ContainerRegister>
  </Container >
  <BoxConfirm id="confirm-data"> 
    <h1>Confirmar Informações</h1>
    <SideContainer>
      <ContentContainer>
        <div>
          <h3>Número do projeto:</h3>
          <h2></h2>
        </div>
        <div>
          <h3>Ata da aprovação:</h3>
          <h2>{fileName ? fileName.split(".")[0] : "Sem ATA"}</h2>
        </div>
      </ContentContainer>
      <Box>
        <div>
          <h3>Título do projeto:</h3>
          <h2></h2>
        </div>
      </Box>
      <Box>
        <div>
          <h3>Descrição do projeto:</h3>
          <h2></h2>
        </div>
      </Box>
      <ContentContainer>
        <div>
          <h3>Nome do responsável:</h3>
          <h2></h2>
        </div>
        <div>
          <h3>Seção do responsável:</h3>
          <h2>{secaoResponsavel}</h2>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div>
          <h3>Nome do solicitante:</h3>
          <h2></h2>
        </div>
        <div>
          <h3>Seção do solicitante:</h3>
          <h2>{secaoSolicitante}</h2>
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
          <h2></h2>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div>
          <h3>Centro de custo:</h3>
          <h2>{analisaValor(sValorCcPagantes ? sValorCcPagantes: 0)}</h2>
        </div>
        <div>
          <h3>Data de término:</h3>
            <h2></h2>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div>
          <h3>Limite de horas aprovadas:</h3>
          <h2>{sEsforco}</h2>
        </div>
        <div>
          <h3>Data de aprovação:</h3>
          <h2></h2>
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
    <div>
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