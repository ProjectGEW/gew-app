import React, { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import api from '../../../service/api';

import { useDropzone } from "react-dropzone";

import { validacaoDosCamposCadastros, vrfCampoComMsg } from '../../../utils/confereCampo';
import analisaValor from '../../../utils/analisaValor';
import tituloMenor from '../../../utils/tituloMenor';

import Paper from "@material-ui/core/Paper";

import { successfulNotify, errorfulNotify, warnNotify } from '../../../hooks/SystemToasts';

import MenuLeft from '../../components/MenuLeft';
import MenuRight from '../../components/MenuRight';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { ContIcons } from '../../components/MenuRight/styles';
import VoltarAoTopo from '../../components/VoltarAoTopo';

import { FiRefreshCcw, FiInfo } from 'react-icons/fi';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FaEquals } from 'react-icons/fa';

import {
  Container, ContainerRegister, Info, Content, Projetos, Responsavel, Gastos,
  Total, Table, Linha, Datas, Finalizar, PopupModal, ContainerPopup, BoxPopup, Error
} from '../../RegisterProjects/styles2';

//Interfaces
interface IProjetoInputDTO {
  infoProjetosInputDTO: IInfoProjetosInputDTO;
  despesasInputDTOS: IDespesas[];
  ccPagantesInputDTO: ICCpagantesInput[];
}

interface IInfoProjetosInputDTO {
  numeroDoProjeto: number;
  titulo: string;
  descricao: string;
  ata: string;
  cracha_responsavel: number;
  cracha_solicitante: number;
  data_de_inicio: string;
  data_de_termino: string;
  data_de_aprovacao: string;
}

interface IDespesas {
  nome: string;
  esforco: number;
  valor: number;
}

interface ICCpagantesInput {
  secao_id?: number;
  valor?: number;
}

interface IFuncionarioResponse {
  infosFuncionarioDTO: {
    nome: string;
    numero_cracha: number;
  };
  secao: string;
}

interface ISecaoResponse {
  nome: string;
}

interface IProjeto {
  infoprojetoDTO: {
    id: number;
    numeroDoProjeto: number;
    titulo: string;
    descricao: string;
    data_de_inicio: string;
    data_de_termino: string;
    data_de_aprovacao: string;
    responsavel: IFuncionario;
    solicitante: IFuncionario;
  },
  despesas: IDespesas[],
  ccPagantes: ICCpagantes[]
}

interface IFuncionario {
  numero_cracha: number;
  nome:string;
}
interface IDespesas {
  nome: string;
  esforco: number;
  valor: number;
}

interface ICCpagantes{
  secao: {
    id: number;
    responsavel: {
      nome: string;
    }
  };
  valor: number;
}

interface ISecoes{
  nome: string;
  responsavel: {
    nome: string;
  }
}

interface ISecao {
  nome: string;
  responsavel: {
    nome: string;
  }
}

const EditarProjeto: React.FC = () => {
  const infosProjeto = {
    infoProjetosInputDTO: {
      numeroDoProjeto: 0,
      titulo: "",
      descricao: "",
      ata: "",
      cracha_responsavel: 0,
      cracha_solicitante: 0,
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

  const [verificaCliqueAta, setVerificaCliqueAta] = useState(false);
    
    //Setar as informações, para usar nos campos
    const { nm }: {nm: string}  = useParams();
    const [despesas, setDespesas] = useState<IDespesas[]>([]);
    const [ccPagante, setCCpagante] = useState<ICCpagantes[]>([]);
    const [projetoEdit, setProjetoEdit] = useState<IProjeto>();
    const [file, setFile] = useState<Blob>();
    const [fileName, setFileName] = useState<string>('');

    const [secaoSolicitante, setSecaoSolicitante] = useState('');
    const [secaoResponsavel, setSecaoResponsavel] = useState('');

    async function handleProject() {
      try {
        await api.get<IProjeto>(`projetos/${nm}`)
          .then((response => {
            setProjetoEdit(response.data); 
            setDespesas(response.data.despesas);
            setCCpagante(response.data.ccPagantes);
            setDataInicio(response.data.infoprojetoDTO.data_de_inicio);
            setDataFim(response.data.infoprojetoDTO.data_de_termino);
            setDataAprovacao(response.data.infoprojetoDTO.data_de_aprovacao);
            buscarInfosFuncionario(String(response.data.infoprojetoDTO.responsavel.numero_cracha), "responsavel");
            buscarInfosFuncionario(String(response.data.infoprojetoDTO.solicitante.numero_cracha), "solicitante");
          })).catch(() => errorfulNotify("Não foi possível encontrar este projeto."));
      } catch(e) {
      console.log(e);
      }
    }

    useEffect(() => {
      handleProject();
    },[]);

    // Obriga a colocar uma ATA (PDF)
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
    }, [verificaCliqueAta, file, fileName]);  

  // Gerar novas linhas  
  function setNovaLinhaDP() {
    return setDespesas([...despesas, {nome: "", esforco: Number(null), valor: Number(null)}]);
  }
      
  function setNovaLinhaCC(){
    return setCCpagante([...ccPagante, {secao: {id: Number(null), responsavel: {nome: ""}}, valor: Number(null)}])
  }
      
  function deleteLastRowDP() {
    if (despesas.length > Number(projetoEdit?.despesas?.length)) {
      despesas.pop();
      setDespesas([...despesas]);

      return;
    }
    
    warnNotify("Não é possível remover os registros.")
    return despesas;
  }

  function deleteLastRowCC(){
    if (ccPagante.length > Number(projetoEdit?.ccPagantes.length)) {
      ccPagante.pop();
      setCCpagante([...ccPagante]);
      return;
    }

    warnNotify("Não é possível remover os registros.")
    return ccPagante;
  }

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDropAccepted: onDrop,
  });

  const { ref, ...rootProps } = getRootProps();

  const [sEsforco, setSEsforco] = useState<number>();
  const [sValorDespesa, setValorDespesa] = useState<number>();
  const [sValorCcPagantes, setValorCcPagantes] = useState<number>();

  function somaTotalDP() {
    var somaEsforco = 0;
    var somaValorDespesa = 0;

    for (let i = 1; i <= despesas.length; i++) {
      somaEsforco += parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value);
      somaValorDespesa += parseInt((document.getElementById(`valor${i}`) as HTMLInputElement).value);
    }

    setSEsforco(somaEsforco);
    setValorDespesa(somaValorDespesa);
  }

  function somaTotalCc() {
    var somaValorCcPagantes = 0;
  
    for (let i = 1; i <= ccPagante.length; i++) {
      somaValorCcPagantes += parseInt((document.getElementById(`valorC${i}`) as HTMLInputElement).value);
      setValorCcPagantes(somaValorCcPagantes);
    }
  }

  function somaTotal() {
    somaTotalCc();
    somaTotalDP();
  };

  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<string>("inicio");
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
        setSelected("fim");
      } else {
        setInputErrorInit("Ano inválido");
      }

      const valorFim = dataFim ? new Date(dataFim.split("/")[1] + "/" + dataFim.split("/")[0] + "/" + dataFim.split("/")[2]) : "01/01/0001";

      if (value >= valorFim) {
        setInputErrorFim("Data de término menor do que a de inicio");
      }

      const valorAprov = dataAprovacao ? new Date(dataAprovacao.split("/")[1] + "/" + dataAprovacao.split("/")[0] + "/" + dataAprovacao.split("/")[2]) : "01/01/0001";

      if (value < valorAprov) {
        setInputErrorAprov("Data de aprovação maior do que a de inicio");
      }
    } else if (selected === "fim") {
      const validation = dataInicio ? true : false;
      const valorInicio = dataInicio ? new Date(dataInicio.split("/")[1] + "/" + dataInicio.split("/")[0] + "/" + dataInicio.split("/")[2]) : "01/01/0001";
      if (validation) {
        if (value > valorInicio) {
          setDataFim(dataFormat);
          setInputErrorFim("");
          setSelected("aprovacao");
        } else {
          setInputErrorFim("Data de término menor do que a de inicio");
        }
      } else {
        setInputErrorFim("Informe primeiro a data de inicio");
      }
    } else if (selected === "aprovacao") {
      const validation = dataInicio ? true : false;
      const valorInicio = dataInicio ? new Date(dataInicio.split("/")[1] + "/" + dataInicio.split("/")[0] + "/" + dataInicio.split("/")[2]) : "01/01/0001";
      if (validation) {
        if (value <= valorInicio) {
          setDataAprovacao(dataFormat);
          setInputErrorAprov("");
        } else {
          setInputErrorAprov("Data de aprovação maior do que a de inicio");
        }
      } else {
        setInputErrorAprov("Informe primeiro a data de inicio");
      }
    }
  }

  //Setar nome e secao na parte de responsavel e solicitante
  const [responavel, setResponsavel] = useState<IFuncionarioResponse>();
  const [solicitante, setSolicitante] = useState<IFuncionarioResponse>();

  async function buscarInfosFuncionario(numero_cracha: string, tipo: string) {
    await api.get<IFuncionarioResponse>(`funcionarios/${numero_cracha}`)
      .then((response) => {
        if (tipo === "responsavel") {
          setResponsavel(response.data);
        }
        if (tipo === "solicitante") {
          setSolicitante(response.data);
        }
      })
      .catch((e) => {
        errorfulNotify("Este funcionario, não é responsavel por uma seção");
        return;
      });
  }

  async function buscarResponsavelSecao(idSecao: string, index:number) {
    await api.get<ISecao>(`secoes/${idSecao}`).then((response) => 
      (document.getElementById(`responsavel${index+1}`) as HTMLInputElement).value = response.data.responsavel.nome
    );
  }

  //Setar informações
  const [projeto, setProjeto] = useState<IProjetoInputDTO>();
  function setarInformações() {
    infosProjeto.infoProjetosInputDTO["numeroDoProjeto"] = parseInt((document.getElementById("numeroProjeto") as HTMLInputElement).value);
    infosProjeto.infoProjetosInputDTO["titulo"] = (document.getElementById("titulo") as HTMLInputElement).value;
    infosProjeto.infoProjetosInputDTO["descricao"] = (document.getElementById("descricao") as HTMLTextAreaElement).value;
    infosProjeto.infoProjetosInputDTO["ata"] = (document.getElementById('ataNome') as HTMLInputElement).value;

    infosProjeto.infoProjetosInputDTO.cracha_responsavel = parseInt((document.getElementById("cracha_responsavel") as HTMLInputElement).value);
    infosProjeto.infoProjetosInputDTO.cracha_solicitante = parseInt((document.getElementById("cracha_solicitante") as HTMLInputElement).value);

    infosProjeto.infoProjetosInputDTO.data_de_inicio = (document.getElementById("data_de_inicio") as HTMLInputElement).value;
    infosProjeto.infoProjetosInputDTO.data_de_termino = (document.getElementById("data_de_termino") as HTMLInputElement).value;
    infosProjeto.infoProjetosInputDTO.data_de_aprovacao = (document.getElementById("data_de_aprovacao") as HTMLInputElement).value;

    for (let i = 1; i <= despesas.length; i++) {
      infosProjeto.despesasInputDTOS.push(
        {
          nome: (document.getElementById(`despesa${i}`) as HTMLInputElement).value,
          esforco: parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value),
          valor: parseFloat((document.getElementById(`valor${i}`) as HTMLInputElement).value)
        }
      )
    };

    for (let i = 1; i <= ccPagante.length; i++) {
      infosProjeto.ccPagantesInputDTO.push(
        {
          secao_id: parseInt((document.getElementById(`centro${i}`) as HTMLInputElement).value),
          valor: parseFloat((document.getElementById(`valorC${i}`) as HTMLInputElement).value)
        }
      )
    };

    setProjeto(infosProjeto);
    somaTotal();

    return console.log(projeto);
  }

  async function cadastrarProjeto() {
    try {
      await api.post<IProjetoInputDTO>('projetos', projeto)
        .then((response) => {
          //history.push('/projects')
          successfulNotify('Projeto cadastrado com sucesso!');
        })
        .catch((e) => {
          errorfulNotify('Não foi possivel cadastrar o projeto!');
        })
    } catch (e) {
      console.log(`Error: ${e}`);
      errorfulNotify('Não foi possivel realizar o cadastro do projeto!');
    }
  }

  return (
    <>
      <Navbar />
      <MenuLeft />
      <Container id="set-data">
        <ContainerRegister id="ContainerRegister">
          <Info>
            <h1>Editar Projeto</h1>
          </Info>
          <Content id="content">
            <Projetos>
              <h1>Descrição geral do projeto <span /></h1>
              <div id="primeiraLinha">
                <div>
                  <label htmlFor="">Número do projeto</label>
                  <input type="number" id="numeroProjeto" defaultValue={nm || ''} disabled />
                  <p id="numeroProjetoResponse" className="msgErro" />
                </div>
                <div>
                  <label htmlFor="">Número da ATA</label>
                  <input type="text" id="ataNome" defaultValue={fileName ? tituloMenor(fileName, fileName.length - 4, 'pdf') : ''} onBlur={(props) =>
                    vrfCampoComMsg(props.target.value, "ataNome", "ataResponse")}
                  />
                  <p id="ataResponse" className="msgErro"></p>
                </div>
                <div>
                  <Paper elevation={0} {...rootProps}>
                    <label id="ata" htmlFor="ata"  >{fileName ? fileName : "SELECIONAR ARQUIVO"}</label>
                    <input id="btnUpload" {...getInputProps()} type="file" accept="application/pdf" />
                  </Paper>
                </div>
              </div>
              <div id="segundaLinha">
                <div id="ladoEsquerdo">
                  <div>
                    <label>Título do projeto: </label>
                    <input type="text" id="titulo" defaultValue={projetoEdit?.infoprojetoDTO.titulo || ''}
                      onBlur={(props) => { vrfCampoComMsg(props.target.value, "titulo", "tituloResponse"); }}
                    />
                    <p id="tituloResponse" className="msgErro"></p>
                  </div>
                  <div>
                    <label>Descrição do projeto: </label>
                    <textarea id="descricao" defaultValue={projetoEdit?.infoprojetoDTO.descricao || ''}
                     onBlur={(props) => { vrfCampoComMsg(props.target.value, "descricao", "descricaoResponse"); }}
                    />
                    <p id="descricaoResponse" className="msgErro"></p>
                  </div>
                </div>
                <div id="ladoDireito">
                  {<iframe src={file ? URL.createObjectURL(file) : ''} />}
                </div>
              </div>
            </Projetos>
            <Responsavel>
              <h1>Responsáveis pelo projeto <span /></h1>
              <div id="primeiraLinha">
                <h1>Responsável <FiRefreshCcw size={20} /></h1>
                <div>
                  <div>
                    <label htmlFor="cracha_responsavel">Crachá</label>
                    <input type="number" id="cracha_responsavel" onBlur={(props) => {
                        if (props.target.value === "") {
                          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                          errorfulNotify("O campo não pode estar vazio!");
                          return;
                        }
                        props.target.style.border = "";
                        buscarInfosFuncionario(props.target.value, "responsavel");
                      }} defaultValue={responavel?.infosFuncionarioDTO.numero_cracha || ''} />
                  </div>
                  <div>
                    <label htmlFor="nome_responsavel">Nome <FiInfo id="iconNomeResponsavel" size={20} /></label>
                    <input type="text" id="nome_responsavel" defaultValue={responavel?.infosFuncionarioDTO.nome || ''} disabled />
                  </div>
                  <div>
                    <label htmlFor="secao_responsavel">Seção <FiInfo id="iconSecaoResponsavel" size={20} /></label>
                    <input type="text" id="secao_responsavel" defaultValue={responavel?.secao || ''} disabled/>
                  </div>
                </div>
              </div>
              <div id="segundaLinha">
                <h1>Solicitante <FiRefreshCcw size={20} /></h1>
                <div>
                  <div>
                    <label htmlFor="cracha_solicitante">Crachá</label>
                    <input type="text" id="cracha_solicitante" onBlur={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        errorfulNotify("O campo não pode estar vazio!");
                        return;
                      }
                      props.target.style.border = "";
                      buscarInfosFuncionario(props.target.value, "solicitante");
                    }} defaultValue={solicitante?.infosFuncionarioDTO.numero_cracha || ''}/>
                  </div>
                  <div>
                    <label htmlFor="nome_solicitante">Nome <FiInfo id="iconNomeSolicitante" size={20} /></label>
                    <input type="text" id="nome_solicitante" defaultValue={solicitante?.infosFuncionarioDTO.nome || ''} />
                  </div>
                  <div>
                    <label htmlFor="secao_solicitante">Seção <FiInfo id="iconSecaoSolicitante" size={20} /></label>
                    <input type="text" id="secao_solicitante" defaultValue={solicitante?.secao || ''} disabled/>
                  </div>
                </div>
              </div>
            </Responsavel>
            <Gastos>
              <h1>Despesas & Seções pagantes <span /></h1>
              <div id="primeiraLinha">
                <Table>
                  <div className="table">
                    <h1>Despesas (gastos)</h1>
                    <h1>Esforço</h1>
                    <h1>Valor (R$)</h1>
                  </div>
                  <div id="scroll">
                  {
                      despesas.map((exibe, index) => (
                        <>
                          <Linha id={`D${index + 1}`} key={index}>
                            <input type="text" id={`despesa${index + 1}`} onBlur={(props) => {
                              if (props.target.value === "") {
                                props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                                errorfulNotify("O campo não pode estar vazio!");
                                return;
                              }
                              props.target.style.border = "";
                            }} defaultValue={exibe.nome}/>
                            <input type="number" id={`esforco${index + 1}`} onBlur={(props) => {
                              if (props.target.value === "") {
                                props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                                errorfulNotify("O campo não pode estar vazio!");
                                return;
                              }
                              props.target.style.border = "";
                            }} defaultValue={exibe.esforco}/>
                            <input type="number" id={`valor${index + 1}`} onBlur={(props) => {
                              if (props.target.value === "") {
                                props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                                errorfulNotify("O campo não pode estar vazio!");
                                return;
                              }
                              props.target.style.border = "";
                            }} defaultValue={exibe.valor}/>
                          </Linha>
                        </>
                      )) || ''
                    }
                  </div>
                  <Total>
                    <div>
                      <button onClick={() => setNovaLinhaDP()}>Adicionar</button>
                      <button onClick={() => deleteLastRowDP()}>Remover</button>
                    </div>
                    <div>
                      <h2>TOTAL:</h2>
                      <input id="totalEsforco" type="number" value={sEsforco || 0} disabled/>
                      <input id="totalValor" type="text" value={analisaValor(sValorDespesa || 0)} disabled/>
                      <FaEquals id="soma" onClick={() => somaTotalDP()} />
                    </div>
                  </Total>
                </Table>
              </div>
              <div id="segundaLinha">
                <Table id="tableTwo">
                  <div className="table segundaTabela">
                    <h1>Seção (Nº)</h1>
                    <h1>Responsável</h1>
                    <h1>Valor (R$)</h1>
                  </div>
                  <div id="scroll" className="segundaTabelaLinha">
                  {
                      ccPagante.map((exibe, index) => (
                        <Linha id={`C${index + 1}`} key={index}>
                          <input type="text" id={`centro${index + 1}`} onBlur={(props) => {
                            if (props.target.value === "") {
                              props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                              errorfulNotify("O campo não pode estar vazio!");
                              return;
                            }
                            props.target.style.border = "";
                            buscarResponsavelSecao(props.target.value, index);
                          }} defaultValue={exibe.secao.id}/>
                          <input type="text" id={`responsavel${index + 1}`} defaultValue={exibe.secao.responsavel.nome} disabled />
                          <input type="text" id={`valorC${index + 1}`} onBlur={(props) => {
                            if (props.target.value === "") {
                              props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                              errorfulNotify("O campo não pode estar vazio!");
                              return;
                            }
                            props.target.style.border = "";
                          }} defaultValue={exibe.valor}/>
                        </Linha>
                      )) || ''
                    }
                  </div>
                  <Total>
                    <div>
                      <button onClick={() => setNovaLinhaCC()}>Adicionar</button>
                      <button onClick={() => deleteLastRowCC()}>Remover</button>
                    </div>
                    <div>
                      <h2>TOTAL:</h2>
                      <input id="totalValor" type="text" value={analisaValor(sValorCcPagantes || 0)} disabled />
                      <FaEquals id="soma" onClick={() => somaTotalCc()} />
                    </div>
                  </Total>
                </Table>
              </div>
            </Gastos>
            <Datas hasErrorAprovacao={!!inputErrorAprov} hasErrorFim={!!inputErrorFim} hasErrorInicio={!!inputErrorInit}>
              <h1>Datas <span /></h1>
              <div id="primeiraLinha">
                <div>
                  <label htmlFor="">Data de aprovação:</label>
                  <input type="text" id="data_de_aprovacao" value={dataAprovacao}
                    onClick={() => { setSelected("aprovacao") }}
                    onChange={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        return;
                      }
                      props.target.style.border = "";
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Data de início:</label>
                  <input type="text" id="data_de_inicio" value={dataInicio}
                    onClick={() => { setSelected("inicio") }}
                    onChange={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        return;
                      }
                      props.target.style.border = "";
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Data de término:</label>
                  <input type="text" id="data_de_termino" value={dataFim}
                    onClick={() => { setSelected("fim") }}
                    onChange={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        return;
                      }
                      props.target.style.border = "";
                    }}
                  />
                </div>
              </div>
              <div>
                {inputErrorInit && <Error localErro={selected}>{inputErrorInit}</Error>}
                {inputErrorFim && <Error localErro={selected}>{inputErrorFim}</Error>}
                {inputErrorAprov && <Error localErro={selected}>{inputErrorAprov}</Error>}
              </div>
              <div id="segundaLinha">
                <Calendar calendarType={'US'} className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => { setData(props) }} />
              </div>
            </Datas>
            <Finalizar>
              <PopupModal closeOnEscape trigger={
                <span id='button-holding' >
                  <Button onClick={() => setarInformações()} tipo={"continuarCadastro"} text={"Continuar"} />
                </span>
              } modal>
                {(close: any) => (
                  <ContainerPopup>
                    <BoxPopup>
                      <h1 className="header">
                        <IoMdClose id="voltar" onClick={() => close()} />
                        Confirmar informações
                      </h1>
                      <div>
                        <div id="ladoEsquerdo">
                          <div className="projeto">
                            <h1>Dados do projeto</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Número do projeto:</label>
                                <p>{projeto?.infoProjetosInputDTO.numeroDoProjeto || 0}</p>
                              </div>
                              <div>
                                <label>Ata de aprovação:</label>
                                <p>{projeto?.infoProjetosInputDTO.ata}</p>
                              </div>
                            </div>
                            <div className="linhaDois">
                              <div>
                                <label>Título do projeto:</label>
                                <p>{projeto?.infoProjetosInputDTO.titulo}</p>
                              </div>
                            </div>
                            <div className="linhaTres">
                              <div>
                                <label>Descrição do projeto:</label>
                                <textarea id="descricao" defaultValue={projeto?.infoProjetosInputDTO.descricao} disabled />
                              </div>
                            </div>
                          </div>
                          <div className="responsavel">
                            <h1>Encarregados</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Crachá do responsável:</label>
                                <p>{projeto?.infoProjetosInputDTO.cracha_responsavel}</p>
                              </div>
                              <div>
                                <label>Nome do responsável:</label>
                                <p>{responavel?.infosFuncionarioDTO.nome}</p>
                              </div>
                            </div>
                            <div className="linhaDois">
                              <div>
                                <label>Crachá do solicitante:</label>
                                <p>{projeto?.infoProjetosInputDTO.cracha_solicitante}</p>
                              </div>
                              <div>
                                <label>Nome do solicitante:</label>
                                <p>{solicitante?.infosFuncionarioDTO.nome}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="ladoDireito">
                          <div className="gastos">
                            <h1>Custos</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Limite de horas:</label>
                                <p><AiOutlineClockCircle size={15} /> 0</p>
                              </div>
                              <div>
                                <label>Total despesas</label>
                                <p>{analisaValor(0)}</p>
                              </div>
                              <div>
                                <label>Valor total</label>
                                <p>{analisaValor(0)}</p>
                              </div>
                            </div>
                          </div>
                          <div className="datas">
                            <h1>Datas</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Data de aprovação:</label>
                                <p><AiOutlineCalendar /> {projeto?.infoProjetosInputDTO.data_de_aprovacao}</p>
                              </div>
                              <div>
                                <label>Data de início:</label>
                                <p><AiOutlineCalendar />{projeto?.infoProjetosInputDTO.data_de_inicio}</p>
                              </div>
                              <div>
                                <label>Data de término:</label>
                                <p><AiOutlineCalendar /> {projeto?.infoProjetosInputDTO.data_de_termino}</p>
                              </div>
                            </div>
                          </div>
                          <div className="final">
                            <button onClick={() => {
                              if (validacaoDosCamposCadastros(despesas.length, ccPagante.length)) {
                                cadastrarProjeto();
                              }
                            }}>Finalizar</button>
                          </div>
                        </div>
                      </div>
                    </BoxPopup>
                  </ContainerPopup>
                )}
              </PopupModal>
              {/* <span id='button-holding' onClick={() => {
              setarInformações();
              console.log(infosProjeto)}
            }> 
              <Button tipo={"continuarCadastro"} text={"Confirmar"} />
            </span> */}

            </Finalizar>
          </Content>
        </ContainerRegister>
      </Container>
      {
        // Ativa botão para voltar pro topo da página
        window.innerHeight >= 780 ? <VoltarAoTopo /> : ''
      }
      <MenuRight numeroDoProjeto={Number(nm)}>
        <ContIcons />
      </MenuRight>
    </>
  );
}

export default EditarProjeto;