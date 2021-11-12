import React, { useState, useCallback, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import { useDropzone } from "react-dropzone";

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import Button from '../../components/Button';

import analisaValor from '../../../utils/analisaValor';

import { RowDespesasEdit } from '../../components/RegisterProject/Dinheiro/Row/RowDP';
import { RowCcPagantesEdit } from '../../components/RegisterProject/Dinheiro/Row/RowCC';

import { BoxProjeto, Preview } from '../../components/RegisterProject/Projeto/styles';
import { BoxResponsavel } from '../../components/RegisterProject/Responsavel/styles';
import { BoxDinheiro, Linha, Table, Total } from '../../components/RegisterProject/Dinheiro/styles';
import { BoxDatas } from '../../components/RegisterProject/Datas/styles';
import { ContIcons } from '../../components/MenuRight/styles';
import Footer from '../../components/Footer';
import 'react-calendar/dist/Calendar.css';

import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { RiPauseCircleFill } from 'react-icons/ri';

import { Container, ContainerRegister, Info, Content, Error, LinhaTitulo } from './styles';

import { Box, BoxConfirm, ContentContainer, SideContainer } from '../../test2/styles';

import api from "../../../service/api";

import { errorfulNotify } from '../../../hooks/SystemToasts'
import { vrfCampoComMsg, validacaoDosCamposCadastros } from '../../../utils/confereCampo';
import { Subtittles } from '../../components/Subtittles/styles';

interface ISecaoResponse {
  nome: string;
}

// interface IProjetoResponse {
//   numeroDoProjeto: number;
// }

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

const EditProjects: React.FC = () => {
    const [verificaCliqueAta, setVerificaCliqueAta] = useState(false);
    // console.log("a");
    //Setar as informações, para usar nos campos
    const { nm }: {nm: string}  = useParams();
    const [projetoEdit, setProjetoEdit] = useState<IProjeto>();
    const [file, setFile] = useState<Blob>();
    const [fileName, setFileName] = useState<string>('');
    const [rowDespesas, setRowDespesas] = useState<JSX.Element[]>([]);
    const [rowCC, setRowCC] = useState<JSX.Element[]>([]);

    useEffect(() => {
      window.onload = async function handleProjeto() {
        api.get<IProjeto>(`projetos/${nm}`).then((response => setProjetoEdit(response.data)));
      }

      console.log(projetoEdit);
      //Impedir looping infinito

      // if(rowDespesas.length < projetoEdit!?.despesas.length){
      //   //Setar as linhas para a tablea de despesas 
      //   for (let i = 0; i < Number(projetoEdit!?.despesas.length); i++) {
      //     setRowDespesas(
      //       [...rowDespesas, 
      //         <RowDespesasEdit 
      //         number={i+1} 
      //         nomeDespesa={String(projetoEdit!?.despesas[i]?.nome)}
      //         esforco={Number(projetoEdit!?.despesas[i]?.esforco)}
      //         valor={Number(projetoEdit!?.despesas[i]?.esforco)}
      //         />
      //       ]
      //     );   
      //   }
      // }

      
          // //Impedir looping infinito
          // if(rowCC.length < response.data.ccPagantes.length){
          //   //Setar as linhas para a tablea de Centro de Custos
          //   for (let i = 0; i < Number(response.data.ccPagantes.length); i++) {
          //     setRowCC([...rowCC,
          //       <RowCcPagantesEdit 
          //         number={i+1} 
          //         numeroCracha={response.data.ccPagantes[i].secao.id}
          //         valor={response.data.ccPagantes[i].valor}
          //         responsavel={response.data.ccPagantes[i].secao.responsavel.nome}
          //       />
          //     ])
          //   }
          // }

          // handleSecao(String(projetoEdit?.infoprojetoDTO.responsavel.nome), "secao_responsavel");
          // handleSecao(String(projetoEdit?.infoprojetoDTO.solicitante.nome), "secao_solicitante");

          // if(dataInicio === undefined) {
          //   setDataInicio(projetoEdit?.infoprojetoDTO.data_de_inicio);
          // }

          // if(dataFim === undefined) {
          //   setDataFim(projetoEdit?.infoprojetoDTO.data_de_termino);
          // }

          // if(dataAprovacao === undefined) {
          //   setDataAprovacao(projetoEdit?.infoprojetoDTO.data_de_aprovacao)
          // }
        
    }, [projetoEdit]);

    // console.log(projetoEdit!?.despesas[0]);
     if(rowDespesas.length < projetoEdit!?.despesas.length){
    //   //Setar as linhas para a tablea de despesas 
    //   for(let i = 0; i < Number(projetoEdit!?.despesas.length); i++) {
    //     setRowDespesas(
    //       [...rowDespesas, 
    //         <RowDespesasEdit 
    //         number={i+1} 
    //         nomeDespesa={String(projetoEdit!?.despesas[i]?.nome)}
    //         esforco={Number(projetoEdit!?.despesas[i]?.esforco)}
    //         valor={Number(projetoEdit!?.despesas[i]?.valor)}
    //         />
    //       ]
    //     );   
    //   }



    // setRowDespesas(
    //   [...rowDespesas, 
    //     <RowDespesasEdit 
    //     number={0} 
    //     nomeDespesa={String(projetoEdit!?.despesas[0]?.nome)}
    //     esforco={Number(projetoEdit!?.despesas[0]?.esforco)}
    //     valor={Number(projetoEdit!?.despesas[0]?.valor)}
    //     />
    //   ]
    // );   
     }
      
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
    setRowDespesas(
      [...rowDespesas, 
        <RowDespesasEdit 
          number={ rowDespesas[rowDespesas.length - 1].props.number + 1} 
          nomeDespesa={""}
          esforco={0}
          valor={0}
        />
      ]);
    return rowDespesas;
  }
      
  function setNovaLinhaCC(){
    setRowCC([...rowCC,
      <RowCcPagantesEdit
        number={ rowCC[rowCC.length - 1].props.number +1}
      />
    ]);
    return rowCC;
  }
      
  function deleteLastRowDP() {
    if (rowDespesas.length > Number(projetoEdit?.despesas?.length)) {
      document.getElementById(`DE${rowDespesas[rowDespesas.length - 1].props.number}`)!.style.display = "none";
      rowDespesas.pop();
      setRowDespesas([...rowDespesas]);
      return rowDespesas;
    }
    setRowDespesas([...rowDespesas]);
    return rowDespesas;
  }

  function deleteLastRowCC(){
    if (rowCC.length > Number(projetoEdit?.ccPagantes.length)) {
      document.getElementById(`CE${rowCC[rowCC.length - 1].props.number}`)!.style.display = "none";
      rowCC.pop();
      setRowCC([...rowCC]);
      return rowCC;
    }
    setRowCC([...rowCC]);
    return rowCC;
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

  function somaTotalDP() {
    var somaEsforco = 0;
    var somaValorDespesa = 0;

    for (let i = 1; i <= rowDespesas.length; i++) {
      somaEsforco += parseInt((document.getElementById(`esforco${i}`) as HTMLInputElement).value);
      somaValorDespesa += parseInt((document.getElementById(`valor${i}`) as HTMLInputElement).value);
    }

    setSEsforco(somaEsforco);
    setValorDespesa(somaValorDespesa);
  }

  function somaTotalCc() {
    var somaValorCcPagantes = 0;
  
    for (let i = 1; i <= rowCC.length; i++) {
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

  const [secaoSolicitante, setSecaoSolicitante] = useState('');
  const [secaoResponsavel, setSecaoResponsavel] = useState('');
  
  async function handleSecao(nome: string, campo: string){ 
    try {
      await api.get<ISecaoResponse>(`secoes/nome/${nome}`)
      .then((response => {
        (document.getElementById(campo) as HTMLInputElement).value = response.data.nome;

        if (campo === "secao_solicitante"){
          setSecaoSolicitante(response.data.nome);
        }
        if (campo === "secao_responsavel"){
          setSecaoResponsavel(response.data.nome);
        }
      }))
      .catch((e) => {
        if((document.getElementById(campo) as HTMLInputElement).value !== ""){
          errorfulNotify("Nome informado inválido");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  rowDespesas.push();
  
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
                  onBlur={(props) => { vrfCampoComMsg(props.target.value, "titulo", "tituloResponse"); }}
                />
                <p id="tituloResponse" className="msgErro"></p>
                <label>Descrição do projeto:</label>
                <textarea id="descricao" 
                  defaultValue={projetoEdit?.infoprojetoDTO.descricao}
                  onBlur={(props) => { vrfCampoComMsg(props.target.value, "descricao", "descricaoResponse"); }}/>
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
            : <Preview src={''}/>
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
              
                  vrfCampoComMsg(props.target.value, "nome_responsavel", "responsavelResponse");
                }}/>
                <p id="responsavelResponse" className="msgErro"></p>
                <label>Nome do solicitante:</label>
                <input type="text" id="nome_solicitante" 
                  defaultValue={projetoEdit?.infoprojetoDTO.solicitante.nome}
                  onBlur={(props) =>  {
                  if (props.target.value !== "") {
                    handleSecao(props.target.value, "secao_solicitante");
                  }

                  vrfCampoComMsg(props.target.value, "nome_solicitante", "solicitanteResponse");
                }}/>
                <p id="solicitanteResponse" className="msgErro"></p>
              </div>
              <div>
                <label>Seção do responsável:</label>
                <input type="text" defaultValue={secaoResponsavel} disabled id="secao_responsavel" />
                <label id="label_secao_solicitante">Seção do solicitante:</label>
                <input type="text" defaultValue={secaoSolicitante} disabled id="secao_solicitante"/>
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
                {
                  projetoEdit ? projetoEdit.despesas.map((a, index) => (
                      <Linha id={`D${index+1}`}>
                        <input type="text" id={`despesa${index+1}`} defaultValue={a.nome} />
                        <input type="number" id={`esforco${index+1}`} defaultValue={a.esforco} />
                        <input type="number" id={`valor${index+1}`} defaultValue={a.valor}/>
                      </Linha>
                      )) 
                  : ''
                }
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
                  <RiPauseCircleFill id="soma" onClick={() => somaTotalDP()}/>
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
                  <input id="totalValor" type="text" disabled value={sValorCcPagantes? analisaValor(sValorCcPagantes): 0} />
                  <RiPauseCircleFill id="soma" onClick={() => somaTotalCc()}/>
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
          <Calendar className={"calendario"} value={value} onChange={onChange} onClickDay={(props) => {setData(props)}} />
        </BoxDatas>
      </Content>
      <span id='button-holding' onClick={() => { 
        if(validacaoDosCamposCadastros(rowDespesas.length, rowCC.length)) {
          trocarMainEtapa('confirm-data');
          somaTotalDP();
        }
      }}
      > 
    <Button tipo={"botaoEdicao"} text={"Confirmar"} />
    </span>
    </ContainerRegister>
  </Container >

  <BoxConfirm id="confirm-data"> 
    <h1 className="header">Confirmar Informações</h1>
    <SideContainer>
      <ContentContainer>
        <Subtittles tipo={'RegisterProjectData'}>Dados do Projeto</Subtittles>
        <div>
          <h3>Número do projeto:</h3>
          <h2>{projetoEdit?.infoprojetoDTO.numeroDoProjeto}</h2>
        </div>
        <div>
          <h3>Ata da aprovação:</h3>
          <h2>{fileName ? fileName.split(".")[0] : "Sem ATA"}</h2>
        </div>
      </ContentContainer>
      <Box>
        <div>
          <h3>Título do projeto:</h3>
          <h2>{projetoEdit?.infoprojetoDTO?.titulo}</h2>
        </div>
      </Box>
      <Box>
        <div>
          <h3>Descrição do projeto:</h3>
          <h2>{projetoEdit?.infoprojetoDTO?.descricao}</h2>
        </div>
      </Box>
      <Subtittles tipo={'Encharged'}>Encarregados</Subtittles>
      <ContentContainer>
        <div>
          <h3>Nome do responsável:</h3>
          <h2>{projetoEdit?.infoprojetoDTO?.responsavel.nome}</h2>
        </div>
        <div>
          <h3>Seção do responsável:</h3>
          <h2>{secaoResponsavel}</h2>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div>
          <h3>Nome do solicitante:</h3>
          <h2>{projetoEdit?.infoprojetoDTO?.solicitante.nome}</h2>
        </div>
        <div>
          <h3>Seção do solicitante:</h3>
          <h2>{secaoSolicitante}</h2>
        </div>
      </ContentContainer>
    </SideContainer>
    <SideContainer>
      <ContentContainer>
        <Subtittles tipo={'Costs'}>Custos</Subtittles>
        <div>
          <h3>Limite de horas:</h3>
          <h2>
            <AiOutlineClockCircle />
            {sEsforco}
          </h2>
        </div>
        <div>
          <h3>Centro de custo:</h3>
          <h2>{analisaValor(sValorCcPagantes ? sValorCcPagantes: 0)}</h2>
        </div>
        <div>
          <h3>Percentual Aprovado: </h3>
          <h2>{analisaValor(sValorDespesa ? sValorDespesa : 0)}</h2>
        </div>
      </ContentContainer>
      <ContentContainer>
      <Subtittles tipo={'DatesEdit'}>Datas</Subtittles>
        <div>
          <h3>Data de início:</h3>
          <h2>
            <AiOutlineCalendar />
            {projetoEdit?.infoprojetoDTO?.data_de_inicio}
          </h2>
        </div>
        <div>
          <h3>Data de término:</h3>
            <h2>
              <AiOutlineCalendar />
              {projetoEdit?.infoprojetoDTO?.data_de_termino}
            </h2>
        </div>
        <div>
          <h3>Data de aprovação:</h3>
          <h2>
            <AiOutlineCalendar />
            {projetoEdit?.infoprojetoDTO?.data_de_aprovacao}
          </h2>
        </div>
      </ContentContainer>
    </SideContainer>
    <Footer tipo={"registerProjects"} />
    <HiArrowNarrowLeft id="voltar" onClick={() => trocarMainEtapa("set-data")}/>
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

export default EditProjects;