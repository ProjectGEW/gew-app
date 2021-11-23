import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import MenuLeft from '../components/MenuLeft';
import MenuRight from '../components/MenuRight';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { ContIcons } from '../components/MenuRight/styles';
import VoltarAoTopo from '../components/VoltarAoTopo';

import { FiRefreshCcw, FiInfo } from 'react-icons/fi';

import { Container, ContainerRegister, Info, Content, Projetos, Responsavel, Gastos,
Total, Table, Linha, Datas, Finalizar, Confirmar } from './styles2';

import { RiPauseCircleFill } from 'react-icons/ri';
import { vrfCampoComMsg } from '../../utils/confereCampo';
import api from '../../service/api';
import { useState } from 'react';
import { errorfulNotify, warnNotify } from '../../hooks/SystemToasts';
import analisaValor from '../../utils/analisaValor';
import { Error } from './styles';

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

interface ICCpagantesInput{
  secao_id?: number;
  valor?: number;
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

interface IFuncionarioResponse {
  infosFuncionarioDTO: {
    nome: string;
  };
  secao: string;
}


const CadastroProjeto: React.FC = () => {
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

  infosProjeto.despesasInputDTOS.shift();
  infosProjeto.ccPagantesInputDTO.shift();

  //Lista para fazer linha de despesas
  const [despesas, setDespesas] = useState<IDespesas[]>([{nome: "", esforco: Number(null), valor: Number(null)}]);
  const [ccPagante, setCCpagante] = useState<ICCpagantes[]>([{secao: {id: Number(null), responsavel: {nome: ""}}, valor: Number(null)}]);

  function trocarMainEtapa(proxMainEtapa: string) {
    //Desativa todas
    document.getElementById("set-data")!.style.display = "none";
    document.getElementById("confirm-data")!.style.display = "none";
    //Ativa uma
    document.getElementById(`${proxMainEtapa}`)!.style.display = "block";
  }

  //Setar nome e secao na parte de responsavel e solicitante
  async function buscarInfosFuncionario(numero_cracha: string, tipo: string) {
    await api.get<IFuncionarioResponse>(`funcionarios/${numero_cracha}`)
      .then((response ) => {
        if(tipo === "responsavel") {
          (document.getElementById("nome_responsavel") as HTMLInputElement).value = response.data.infosFuncionarioDTO.nome; 
          (document.getElementById("secao_responsavel") as HTMLInputElement).value = response.data.secao; 
        } 
        if (tipo === "solicitante") {
          (document.getElementById("nome_solicitante") as HTMLInputElement).value = response.data.infosFuncionarioDTO.nome; 
          (document.getElementById("secao_solicitante") as HTMLInputElement).value = response.data.secao; 
        } 
      })
      .catch((e) => {
        errorfulNotify("Este funcionario, não é responsavel por uma seção");
        return;
      })
  }
  
  //Variaveis para somar o total de esforco e valor das despesas
  const [esforco, setEsforco] = useState<number>();
  const [valorDespesa, setValorDespesa] = useState<number>();
  
  // Gerar novas linhas para lista de despesas
  function setNovaLinhaDP() {
    return setDespesas([...despesas, {nome: "", esforco: Number(null), valor: Number(null)}]);
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

  function setNovaLinhaCC(){
    return setCCpagante([...ccPagante, {secao: {id: Number(null), responsavel: {nome: ""}}, valor: Number(null)}])
  }

  function deleteLastRowCC(){
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

  //Setar informações
  function setarInformações(){
    infosProjeto.infoProjetosInputDTO["numeroDoProjeto"] = parseInt((document.getElementById("numeroProjeto") as HTMLInputElement).value);
  }

  return (
    <>
    <Navbar />
    <MenuLeft />
    <h6 id="topo"/>
    <Container id="set-data">
      <ContainerRegister id="ContainerRegister">
        <Info>  
          <h1>Cadastrar Projeto</h1>
        </Info>
        <Content id="content">
          <Projetos>
            <h1>Descrição geral do projeto <FiInfo size={20}/></h1>
            <div id="primeiraLinha">
              <div>
                <label htmlFor="">Número do projeto</label>
                <input type="number" id="numeroProjeto" onBlur={(props) => {
                  vrfCampoComMsg(props.target.value, "numeroProjeto", "numeroProjetoResponse");
                }}
                />
                <p id="numeroProjetoResponse" className="msgErro" />
              </div>
              <div>
                <label htmlFor="">Número da ATA</label>
                <input type="text" id="ataNome" onBlur={(props) => 
                  vrfCampoComMsg(props.target.value, "ataNome", "ataResponse")}
                />
                <p id="ataResponse" className="msgErro"></p>
              </div>
              <div>
                <label id="ata" htmlFor="ata">SELECIONAR ARQUIVO</label>
                <input id="btnUpload" type="file" accept="application/pdf" />
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
                <iframe src="file:///C:/Users/Aluno/Documents/ATA_implantacao.pdf"></iframe>
              </div>
            </div>
          </Projetos>
          <Responsavel>
            <h1>Responsáveis pelo projeto <FiInfo size={20}/></h1>
            <div id="primeiraLinha">
              <h1>Responsável <FiRefreshCcw size={20}/></h1>
              <div>
                <div>
                  <label htmlFor="cracha_responsavel">Crachá</label>
                  <input type="number" id="cracha_responsavel" onBlur={(props) => buscarInfosFuncionario(props.target.value, "responsavel")}/>
                </div>
                <div>
                    <label htmlFor="nome_responsavel">Nome <FiInfo id="iconNomeResponsavel" size={20}/></label>
                  <input type="text" id="nome_responsavel" disabled />
                </div>
                <div>
                  <label htmlFor="secao_responsavel">Seção <FiInfo id="iconSecaoResponsavel" size={20}/></label>
                  <input type="text" id="secao_responsavel" disabled />
                </div>
              </div>
            </div>
            <div id="segundaLinha">
              <h1>Solicitante <FiRefreshCcw size={20}/></h1>
              <div> 
                <div>
                  <label htmlFor="cracha_solicitante">Crachá</label>
                    <input type="text" id="cracha_solicitante" onBlur={(props) => buscarInfosFuncionario(props.target.value, "solicitante")} />
                </div>
                <div>
                  <label htmlFor="nome_solicitante">Nome <FiInfo id="iconNomeSolicitante" size={20}/></label>
                  <input type="text" id="nome_solicitante" disabled />
                </div>
                <div>
                  <label htmlFor="secao_solicitante">Seção <FiInfo id="iconSecaoSolicitante" size={20}/></label>
                  <input type="text" id="secao_solicitante" disabled />
                </div>
              </div>
            </div>
          </Responsavel>
          <Gastos>
            <h1>Despesas & Seções pagantes <FiInfo size={20}/></h1>
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
                          <Linha id={`D${index+1}`} key={index}>
                            <input type="text" id={`despesa${index+1}`} />
                            <input type="number" id={`esforco${index+1}`} />
                            <input type="number" id={`valor${index+1}`} />  
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
                    <input id="totalEsforco" type="number" value={esforco || 0} disabled/>
                    <input id="totalValor" type="text" value={analisaValor(valorDespesa || 0)} disabled/>
                    <RiPauseCircleFill id="soma" onClick={() => somaTotalDP()}/>
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
                        <input type="text" id={`centro${index + 1}`} />
                        <input type="text" id={`responsavel${index + 1}`} disabled/>
                        <input type="text" id={`valorC${index + 1}`} />
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
                    <input id="totalValor" type="text" value={analisaValor(valorSecoesPagantes || 0)} disabled/>
                    <RiPauseCircleFill id="soma" onClick={() => somaTotalCc()}/>
                  </div>
                </Total>
              </Table>
            </div>
          </Gastos>
          <Datas hasErrorAprovacao={!!inputErrorAprov} hasErrorFim={!!inputErrorFim} hasErrorInicio={!!inputErrorInit}>
            <h1>Datas <FiInfo size={20}/></h1>
            <div id="primeiraLinha">
              <div>
                <label htmlFor="">Data de aprovação:</label>
                <input type="text" id="data_de_aprovacao" value={dataAprovacao}
                  onClick={() => {setSelected("aprovacao")}} 
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
                  onClick={() => {setSelected("inicio")}} 
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
                  onClick={() => {setSelected("fim")}} 
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
              <Calendar calendarType={'US'} className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => {setData(props)}}/>
            </div>
          </Datas>
          <Finalizar>
            <span id='button-holding' onClick={() => {
              setarInformações();
              console.log(infosProjeto)}
            }> 
              <Button tipo={"continuarCadastro"} text={"Confirmar"} />
            </span>
          </Finalizar>
        </Content>
      </ContainerRegister>
    </Container>
    <Confirmar id="confirm-data"> 
      <h1 className="header">Confirmar Informações</h1>
      <div id="ladoDireito">
        <div className="projeto">

        </div>
        <div className="responsavel">
          
        </div>
      </div>
      <div id="ladoEsquerdo">
        <div className="projeto">

        </div>
        <div className="responsavel">
          
        </div>
      </div>
    </Confirmar>
    {
      document.scrollingElement!?.scrollTop >= 480 ? <VoltarAoTopo idRedirect="#topo"/> : ''
    }
    <MenuRight>
      <ContIcons />
    </MenuRight>
    </>
  );
}

export default CadastroProjeto;