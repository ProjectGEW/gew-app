import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import api from '../../service/api';

import { useDropzone } from "react-dropzone";

import { validacaoDosCamposCadastros, vrfCampoComMsg } from '../../utils/confereCampo';
import analisaValor from '../../utils/analisaValor';
import tituloMenor from '../../utils/tituloMenor';

import Paper from "@material-ui/core/Paper";

import { successfulNotify, errorfulNotify, warnNotify } from '../../hooks/SystemToasts';

import MenuLeft from '../../components/MenuLeft';
import MenuRight from '../../components/MenuRight';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
//import VoltarAoTopo from '../../components/VoltarAoTopo';
import { ContIcons } from '../../components/MenuRight/styles';

import { FiRefreshCcw } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FaEquals, FaRegIdBadge } from 'react-icons/fa';
import { AiOutlineClockCircle, AiOutlineCalendar, AiOutlineNumber, AiOutlineFilePdf } from 'react-icons/ai';

import { Container, ContainerRegister, Info, Content, Projetos, Responsavel, Gastos, Total, Table, Linha,
  Datas, Finalizar, PopupModal, ContainerPopup, BoxPopup, Error } from './styles';

interface IProjetoInputDTO {
  projetoData: IInfoProjetosInputDTO;
  despesas: IDespesas[];
  secoesPagantes: ICCpagantesInput[];
}

interface IProjetoResponse {
  numeroDoProjeto: number;
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

interface ICCpagantes {
  secao: {
    id: number;
    nome?: string;
    responsavel: {
      nome: string;
    }
  };
  valor: number;
}

interface IFuncionarioResponse {
  funcionario: {
    nome: string;
  };
  secao: string;
}

// interface ISecoes {
//   nome: string;
// }

const CadastroProjeto: React.FC = () => {
  const history = useHistory();

  const infosProjeto = {
    projetoData: {
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
    despesas: [
      {
        nome: "",
        esforco: 0,
        valor: 0
      }
    ],
    secoesPagantes: [
      {
        secao_id: 0,
        valor: 0
      }
    ]
  }

  interface ISecao {
    nome: string;
    responsavel: {
      nome: string;
    }
  }

  infosProjeto.despesas.shift();
  infosProjeto.secoesPagantes.shift();

  //Lista para fazer linha de despesas
  const [despesas, setDespesas] = useState<IDespesas[]>([{ nome: "", esforco: Number(null), valor: Number(null) }]);
  const [ccPagante, setCCpagante] = useState<ICCpagantes[]>([{ secao: { id: Number(null), responsavel: { nome: "" } }, valor: Number(null) }]);

  const [secoes, setSecoes] = useState<ISecao[]>([]);

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

  const handleSecoes = async () => {
    try {
      await api.get<ISecao[]>(`secoes`)
      .then((response => {
        setSecoes(response.data);
      })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleSecoes();
  },[]);

  //Variaveis para somar o total de esforco e valor das despesas
  const [esforco, setEsforco] = useState<number>();
  const [valorDespesa, setValorDespesa] = useState<number>();

  // Gerar novas linhas para lista de despesas
  function setNovaLinhaDP() {
    return setDespesas([...despesas, { nome: "", esforco: Number(null), valor: Number(null) }]);
  }

  // Remover ultima linha de despesas
  function deleteLastRowDP() {
    if (despesas.length > 1) {
      despesas.pop();
      setDespesas([...despesas]);
      return;
    }
    warnNotify("Não é possível remover a ultima linha.");
    return despesas;
  }

  //Somar o total das informações fornecidas na lista de despesas
  function somaTotalDP() {
    var somaEsforco = 0;
    var somaValorDespesa = 0;

    for (let i = 1; i <= despesas.length; i++) {
      somaEsforco += parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value);
      somaValorDespesa += parseInt((document.getElementById(`valor${i}`) as HTMLInputElement).value);
    }

    setEsforco(somaEsforco);
    setValorDespesa(somaValorDespesa);
  }

  //Variaveis para somar o total do valor pago pelos cc pagantes
  const [valorSecoesPagantes, setValorSecoesPagantes] = useState<number>();

  function setNovaLinhaCC() {
    return setCCpagante([...ccPagante, { secao: { id: Number(null), responsavel: { nome: "" } }, valor: Number(null) }])
  }

  function deleteLastRowCC() {
    if (ccPagante.length > 1) {
      ccPagante.pop();
      setCCpagante([...ccPagante]);
      return;
    }
    warnNotify("Não é possível remover a ultima linha");
    return ccPagante;
  }

  function somaTotalCc() {
    var somaValorCcPagantes = 0;

    for (let i = 1; i <= ccPagante.length; i++) {
      somaValorCcPagantes += parseInt((document.getElementById(`valorC${i}`) as HTMLInputElement).value);
      setValorSecoesPagantes(somaValorCcPagantes);
    }
  }

  function somaTotal() {
    somaTotalCc();
    somaTotalDP();
  }

  // Busca as seções
  // const [secoes, setSecoes] = useState<ISecoes[]>([]);

  // async function handleProject() {
  //   try {
  //     await api.get<ISecoes[]>(`secoes`)
  //     .then((response => {
  //       setSecoes(response.data);
  //     })).catch(() => errorfulNotify("Não foi possível encontrar as seções."));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   handleProject();
  // }, []);

  // Funções para funcionamento do calendario
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<string>("inicio");
  const [dataInicio, setDataInicio] = useState<string>();
  const [dataTermino, setDataTermino] = useState<string>();
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

      const valorFim = dataTermino ? new Date(dataTermino.split("/")[1] + "/" + dataTermino.split("/")[0] + "/" + dataTermino.split("/")[2]) : "01/01/0001";

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
          setDataTermino(dataFormat);
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

  //Ata
  const [file, setFile] = useState<Blob>();
  const [fileName, setFileName] = useState<string>('');

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDropAccepted: onDrop,
  });

  const { ref, ...rootProps } = getRootProps();

  //Setar informações
  const [projeto, setProjeto] = useState<IProjetoInputDTO>();
  function setarInformações() {
    infosProjeto.projetoData["numeroDoProjeto"] = parseInt((document.getElementById("numeroProjeto") as HTMLInputElement).value);
    infosProjeto.projetoData["titulo"] = (document.getElementById("titulo") as HTMLInputElement).value;
    infosProjeto.projetoData["descricao"] = (document.getElementById("descricao") as HTMLTextAreaElement).value;
    infosProjeto.projetoData["ata"] = (document.getElementById('ataNome') as HTMLInputElement).value;

    infosProjeto.projetoData.cracha_responsavel = parseInt((document.getElementById("cracha_responsavel") as HTMLInputElement).value);
    infosProjeto.projetoData.cracha_solicitante = parseInt((document.getElementById("cracha_solicitante") as HTMLInputElement).value);

    infosProjeto.projetoData.data_de_inicio = (document.getElementById("data_de_inicio") as HTMLInputElement).value;
    infosProjeto.projetoData.data_de_termino = (document.getElementById("data_de_termino") as HTMLInputElement).value;
    infosProjeto.projetoData.data_de_aprovacao = (document.getElementById("data_de_aprovacao") as HTMLInputElement).value;

    for (let i = 1; i <= despesas.length; i++) {
      infosProjeto.despesas.push(
        {
          nome: (document.getElementById(`despesa${i}`) as HTMLInputElement).value,
          esforco: parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value),
          valor: parseFloat((document.getElementById(`valor${i}`) as HTMLInputElement).value)
        }
      )
    };

    for (let i = 1; i <= ccPagante.length; i++) {
      infosProjeto.secoesPagantes.push(
        {
          secao_id: parseInt((document.getElementById(`centro${i}`) as HTMLSelectElement).value),
          valor: parseFloat((document.getElementById(`valorC${i}`) as HTMLInputElement).value)
        }
      )
    };

    setProjeto(infosProjeto);
    somaTotal();

    return console.log(projeto);
  }

  async function buscarResponsavelSecao(idSecao: string, index: number) {
    await api.get<ISecao>(`secoes/${idSecao}`).then((response) =>
      (document.getElementById(`responsavel${index + 1}`) as HTMLInputElement).value = response.data.responsavel.nome
    );
  }

  async function cadastrarProjeto() {
    try {
      await api.post<IProjetoResponse>('projetos', projeto)
        .then((response) => {
          const data = response.data;

          console.log(data);

          if (file != null) {
            const formData = new FormData();

            formData.append("file", file ? file : "");

            api.post(`files/upload/${data.numeroDoProjeto}`, formData);
          }

          history.push('/projects');
          successfulNotify('Projeto cadastrado com sucesso!');
        })
        .catch(() => {
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
            <h1>Cadastrar Projeto</h1>
          </Info>
          <Content id="content">
            <Projetos>
              <h1>Descrição geral do projeto <span /></h1>
              <div id="primeiraLinha">
                <div>
                  <label htmlFor="">Número do projeto:</label>
                  <input type="number" id="numeroProjeto" onBlur={(props) => {
                    vrfCampoComMsg(props.target.value, "numeroProjeto", "numeroProjetoResponse");
                  }}
                  />
                  <p id="numeroProjetoResponse" className="msgErro" />
                </div>
                <div>
                  <label htmlFor="">Número da ATA:</label>
                  <input type="text" id="ataNome" defaultValue={fileName ? tituloMenor(fileName, fileName.length - 4, 'pdf') : ''} onBlur={(props) =>
                    vrfCampoComMsg(props.target.value, "ataNome", "ataResponse")}
                  />
                  <p id="ataResponse" className="msgErro"></p>
                </div>
                <div ref={ref}>
                  <Paper elevation={0} {...rootProps}>
                    <label id="ata" htmlFor="ata"  >{fileName ? tituloMenor(fileName, 22) : "SELECIONAR ARQUIVO"}</label>
                    <input id="btnUpload" {...getInputProps()} type="file" accept="application/pdf" />
                  </Paper>
                </div>
              </div>
              <div id="segundaLinha">
                <div id="ladoEsquerdo">
                  <div>
                    <label>Título do projeto: </label>
                    <input type="text" id="titulo" onBlur={(props) =>
                      vrfCampoComMsg(props.target.value, "titulo", "tituloResponse")}
                    />
                    <p id="tituloResponse" className="msgErro"></p>
                  </div>
                  <div>
                    <label>Descrição do projeto: </label>
                    <textarea id="descricao" onBlur={(props) =>
                      vrfCampoComMsg(props.target.value, "descricao", "descricaoResponse")}
                    />
                    <p id="descricaoResponse" className="msgErro"></p>
                  </div>
                </div>
                <div id="ladoDireito">
                  {file ? <iframe title='ata' src={file ? URL.createObjectURL(file) : URL.createObjectURL(file)} /> : <div id="preview">Visualize o preview da ATA aqui.</div>}
                </div>
              </div>
            </Projetos>
            <Responsavel>
              <h1>Responsáveis pelo projeto <span /></h1>
              <div id="primeiraLinha">
                <h1>Responsável <FiRefreshCcw size={20} /></h1>
                <div>
                  <div>
                    <label htmlFor="cracha_responsavel">Crachá:</label>
                    <input type="number" id="cracha_responsavel" onBlur={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        errorfulNotify("O campo não pode estar vazio!");
                        return;
                      }
                      props.target.style.border = "";
                      buscarInfosFuncionario(props.target.value, "responsavel");
                    }} />
                  </div>
                  <div>
                    <label htmlFor="nome_responsavel">Nome:</label>
                    <input type="text" id="nome_responsavel" value={responavel?.funcionario.nome} disabled />
                  </div>
                  <div>
                    <label htmlFor="secao_responsavel">Seção:</label>
                    <input type="text" id="secao_responsavel" value={responavel?.secao} disabled />
                  </div>
                </div>
              </div>
              <div id="segundaLinha">
                <h1>Solicitante <FiRefreshCcw size={20} /></h1>
                <div>
                  <div>
                    <label htmlFor="cracha_solicitante">Crachá:</label>
                    <input type="text" id="cracha_solicitante" onBlur={(props) => {
                      if (props.target.value === "") {
                        props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                        errorfulNotify("O campo não pode estar vazio!");
                        return;
                      }
                      props.target.style.border = "";
                      buscarInfosFuncionario(props.target.value, "solicitante");
                    }} />
                  </div>
                  <div>
                    <label htmlFor="nome_solicitante">Nome:</label>
                    <input type="text" id="nome_solicitante" value={solicitante?.funcionario.nome} disabled />
                  </div>
                  <div>
                    <label htmlFor="secao_solicitante">Seção:</label>
                    <input type="text" id="secao_solicitante" value={solicitante?.secao} disabled />
                  </div>
                </div>
              </div>
            </Responsavel>
            <Gastos>
              <h1>Despesas & Seções pagantes <span /></h1>
              <div id="primeiraLinha">
                <Table>
                  <div className="table">
                    <h1>Despesas (gastos):</h1>
                    <h1>Esforço:</h1>
                    <h1>Valor (R$):</h1>
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
                            }} />
                            <input type="number" id={`esforco${index + 1}`} onBlur={(props) => {
                              if (props.target.value === "") {
                                props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                                errorfulNotify("O campo não pode estar vazio!");
                                return;
                              }
                              props.target.style.border = "";
                            }} />
                            <input type="number" id={`valor${index + 1}`} onBlur={(props) => {
                              if (props.target.value === "") {
                                props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                                errorfulNotify("O campo não pode estar vazio!");
                                return;
                              }
                              props.target.style.border = "";
                            }} />
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
                      <h2>Total:</h2>
                      <input id="totalEsforco" className="somaTotal" type="text" value={analisaValor(esforco || 0)} disabled />
                      <input id="totalValor" className="somaTotal" type="text" value={analisaValor(valorDespesa || 0)} disabled />
                      <FaEquals id="soma" onClick={() => somaTotalDP()} />
                    </div>
                  </Total>
                </Table>
              </div>
              <div id="segundaLinha">
                <Table id="tableTwo">
                  <div className="table segundaTabela">
                    <h1>Seção (Nº):</h1>
                    <h1>Responsável:</h1>
                    <h1>Valor (R$):</h1>
                  </div>
                  <div id="scroll" className="segundaTabelaLinha">
                    {
                      ccPagante.map((exibe, index) => (
                        <Linha id={`C${index + 1}`} key={index}>
                          <select defaultValue={exibe.secao.nome} id={`select${index + 1}`} onChange={(props) => buscarResponsavelSecao(props.target.value, index)}>                           
                            {secoes.map((res, index) => {
                              return <option key={index} value={res.nome}>{res.nome}</option>
                            })}                          
                          </select> 
                          <input type="text" id={`responsavel${index + 1}`} disabled />
                          <input type="text" id={`valorC${index + 1}`} onBlur={(props) => {
                            if (props.target.value === "") {
                              props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
                              errorfulNotify("O campo não pode estar vazio!");
                              return;
                            }
                            props.target.style.border = "";
                          }} />
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
                      <h2>Total:</h2>
                      <input id="totalValor" className="somaTotal" type="text" value={analisaValor(valorSecoesPagantes || 0)} disabled />
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
                  <input type="text" id="data_de_termino" value={dataTermino}
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
                                <label>Número:</label>
                                <p><AiOutlineNumber /> {projeto?.projetoData.numeroDoProjeto || 0}</p>
                              </div>
                              <div>
                                <label>Ata de aprovação:</label>
                                <p><AiOutlineFilePdf /> {tituloMenor(projeto ? projeto.projetoData.ata : '', 16)}</p>
                              </div>
                            </div>
                            <div className="linhaDois">
                              <div>
                                <label>Título:</label>
                                <p>{projeto ? projeto.projetoData.titulo.length > 32 ? tituloMenor(projeto.projetoData.titulo, 32) : projeto.projetoData.titulo : ''}</p>
                              </div>
                            </div>
                            <div className="linhaTres">
                              <div>
                                <label>Descrição:</label>
                                <textarea id="descricao" defaultValue={projeto?.projetoData.descricao} disabled />
                              </div>
                            </div>
                          </div>
                          <div className="responsavel">
                            <h1>Encarregados</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Crachá e nome do responsável:</label>
                                <p><FaRegIdBadge /> {projeto ? projeto.projetoData.cracha_responsavel : ''} - {responavel ? responavel.funcionario.nome : ''}</p>
                              </div>
                            </div>
                            <div className="linhaDois">
                              <div>
                                <label>Crachá e nome do solicitante:</label>
                                <p><FaRegIdBadge /> {projeto ? projeto.projetoData.cracha_solicitante : ''} - {solicitante ? solicitante.funcionario.nome : ''}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="ladoDireito">
                          <div className="gastos">
                            <h1>Custos</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Total despesas:</label>
                                <p>{analisaValor(valorDespesa || 0)}</p>
                              </div>
                              <div>
                                <label>Valor total:</label>
                                <p>{analisaValor(valorSecoesPagantes || 0)}</p>
                              </div>
                            </div>
                          </div>
                          <div className='horas'>
                            <h1>Horas</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Limite de horas:</label>
                                <p><AiOutlineClockCircle size={15} /> 0</p>
                              </div>
                            </div>
                          </div>
                          <div className="datas">
                            <h1>Datas</h1>
                            <div className="linhaUm">
                              <div>
                                <label>Aprovação:</label>
                                <p><AiOutlineCalendar /> {projeto ? projeto.projetoData.data_de_aprovacao : ''}</p>
                              </div>
                              <div>
                                <label>Início:</label>
                                <p><AiOutlineCalendar />{projeto ? projeto.projetoData.data_de_inicio : ''}</p>
                              </div>
                              <div>
                                <label>Término:</label>
                                <p><AiOutlineCalendar /> {projeto? projeto .projetoData.data_de_termino : ''}</p>
                              </div>
                            </div>
                          </div>
                          <div className="final">
                            <button onClick={() => {
                              if (validacaoDosCamposCadastros(despesas.length, ccPagante.length, close())) {
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
        //window.innerHeight >= 780 ? <VoltarAoTopo /> : ''
      }
      <MenuRight>
        <ContIcons />
      </MenuRight>
    </>
  );
}

export default CadastroProjeto;
