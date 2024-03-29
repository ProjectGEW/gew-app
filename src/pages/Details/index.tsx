import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Inputs, ContainerDesc, ContainerInfos, ContainerSection, Tittle, Container,
    ContainerDetails, Box, ContainerAppointments, ContainerGraphs, Graphic, Graphic2, Filtros, Top, Bottom,
    Graph, Left, Right, Square, Bar, Pack, Footer  } from './style';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';

import api from '../../service/api';

import analisaValor from "../../utils/analisaValor";

import Button from '../../components/Button';

import { ContIcons } from '../../components/MenuRight/styles';
import GraphCircular from '../../components/GraphCircular';
import retornaTituloMenor from '../../utils/tituloMenor';
import formatStatus from '../../utils/formatStatus';

interface CardContent {
  projetoData: {
    id: number;
    numeroDoProjeto: number;
    titulo: string;
    descricao: string;
    data_de_inicio: string;
    data_de_termino: string;
    data_de_aprovacao: string;
    statusProjeto: string;
    horas_apontadas: number;
    secao: string,
    solicitante: {
      numero_cracha: number;
      nome: string;
      email: string;
      valor_hora: number;
    },
    responsavel: {
      numero_cracha: number;
      nome: string;
      email: string;
      valor_hora: number;
    },
  };
  secoesPagantes : [{
    secao: {
      id: number;
      responsavel: {
        numero_cracha: number;
        nome: string;
        cpf: string;
        valor_hora: number;
      };
      nome: string;
    },
    percentual: number;
    valor: number;
  }];
  valoresTotais : {
    valorTotalCcPagantes: number;
    valorTotalDespesas: number;
    valorTotalEsforco: number;
  };  
  despesas: [{
    nome: string;
    esforco: number;
    valor: number;
  }];
}

interface IHorasApontadas {
  horas_apontadas: number;
  nome_funcionario: string;
  valor_hora: number;
}

interface ISecao {
  secao: string;
}

interface ITotal {
  total: number;
}

const Details: React.FC = () => {
    /*const token = localStorage.getItem('Token');
    let config = {
        headers: { Authorization: `Bearer ${token}`},
    };*/
    
  const { numeroDoProjeto }: {numeroDoProjeto: string}  = useParams();
  const [project, setProject] = useState<CardContent>();
  const [ata, setAta] = useState<string>('');
  const [valorConsumido, setValorConsumido] = useState<ITotal>();
  const [horasApontadas, setHorasApontadas] = useState<IHorasApontadas[]>([]);

  const [responsavelSecao, setResponsavelSecao] = useState<ISecao>();
  const [solicitanteSecao, setSolicitanteSecao] = useState<ISecao>();

  window.onload = async function handleData() {
    let responsaveis = {solicitante: 0, responsavel: 0};
    
    try {
      await api.get<CardContent>(`/projetos/${numeroDoProjeto}`)
      .then((response => { 
        setProject(response.data); 
        responsaveis.responsavel = response.data.projetoData.responsavel.numero_cracha; 
        responsaveis.solicitante = response.data.projetoData.solicitante.numero_cracha
      }));
    } catch(err) {
      console.log(err);
    }

    try {
      await api.get<string>(`/files/${numeroDoProjeto}`)
      .then((response) => {setAta(response.data);});
    } catch (err) {
      console.log(err);
    }

    try {
      await api.get<ITotal>(`projetos/count/verba/${numeroDoProjeto}`)
      .then((response => {setValorConsumido(response.data)}));
    } catch (err) {
      console.log(err);
    }

    try {
      await api.get<IHorasApontadas[]>(`projetos/horas/${numeroDoProjeto}`)
      .then((response) => {setHorasApontadas(response.data)});
    } catch (err) {
      console.log(err);
    }

    try {
      await api.get<ISecao>(`funcionarios/${responsaveis.responsavel}`)
      .then((response) => {setResponsavelSecao(response.data)});
    } catch (err) {
      console.log(err);
    }

    try {
      await api.get<ISecao>(`funcionarios/${responsaveis.solicitante}`)
      .then((response) => {setSolicitanteSecao(response.data)});
    } catch (err) {
      console.log(err);
    }
  }

  const downloadFile = () => {
      window.open(`http://localhost:6868/files/download/${numeroDoProjeto}`);
  }

  return (
    <>
      <Navbar/>
      <MenuLeft/>
      <MenuRight>
        <ContIcons/>
      </MenuRight>
      <Container>
        <ContainerDetails>
          <ContainerSection>
            <div id="titulo">
              <h1>{project ? project.projetoData.numeroDoProjeto : ""} - {project ? project.projetoData.secao : ""}</h1>
              <Tittle>{project ? retornaTituloMenor(project.projetoData.titulo, 50) : ""}</Tittle>
            </div>
            <Inputs>
              <Button text={'Dashboard'} tipo={"DashboardDetails"} rota={"dashboard"} numeroProjeto={project ? project.projetoData.numeroDoProjeto : 0}/>
              <label htmlFor="ata" onClick={downloadFile}>{ata ? ata.split(".")[0] : "Baixar ATA"}</label>
            </Inputs>
          </ContainerSection>
          <ContainerInfos>
            <ul>
              <li>
                <h1>NÚMERO:</h1><h2>{project ? project.projetoData.numeroDoProjeto : ""}</h2>
              </li>
              <li>
                <h1>STATUS:</h1><h2>{project?.projetoData.statusProjeto === "NAO_INICIADO" ? "NÃO INICIADO" : formatStatus(project ? project.projetoData.statusProjeto : '')}</h2>
              </li>
              <li>
                <h1>DATA DE CRIAÇÃO:</h1><h2>{project ? project.projetoData.data_de_inicio : ""}</h2>
              </li>
            </ul>
          </ContainerInfos>
          <ContainerDesc>
            <h1>DESCRIÇÃO:</h1>
            <h2>{project ? project.projetoData.descricao : ""}</h2>
          </ContainerDesc>
          <ContainerInfos>
            <Box>
              <h1>SOLICITANTE / SEÇÃO:</h1>
              <h2>{project ? project.projetoData.solicitante.nome : ""}</h2>
              <h2>{solicitanteSecao ? solicitanteSecao.secao : ''}</h2>
            </Box>
            <Box>
              <h1>RESPONSÁVEL / SEÇÃO:</h1>
              <h2>{project ? project.projetoData.responsavel.nome : ""}</h2>
              <h2>{responsavelSecao ? responsavelSecao.secao : ''}</h2>
            </Box>
          </ContainerInfos>
          <span>Horas apontadas - Funcionários:</span>
          <ContainerAppointments>
            <div className="tableHeader">
              <h2>Funcionário</h2>
              <h2>Horas Apontadas</h2>
              <h2>Valor Hora</h2>
              <h2>Valor Total</h2>
            </div>
            <ul className="scroller sc1">
              {horasApontadas ? horasApontadas.map((horas, index) => (
                  <li key={index}>
                      <h3>{horas.nome_funcionario}</h3>
                      <h3>{horas.horas_apontadas}</h3>
                      <h3>{horas.valor_hora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                      <h3>{analisaValor(horas.horas_apontadas * horas.valor_hora)}</h3>
                  </li>
              )) : ""}
            </ul>
          </ContainerAppointments>
          <ContainerGraphs>
            <Graphic>
              <h1>Verba utilizada sobre o total orçado</h1>
              <GraphCircular total={project ? project.valoresTotais.valorTotalCcPagantes : 0} valor={valorConsumido ? valorConsumido.total : 0} tipo={"valor"}/>
            </Graphic>
            <Graphic>
              <h1>Horas das demandas sobre o total estabelecido</h1>
              <GraphCircular 
                total={project ? project?.valoresTotais.valorTotalEsforco : 0} 
                valor={project ? project?.projetoData.horas_apontadas : 0} 
                tipo={"hora"}
              />
            </Graphic>
          </ContainerGraphs>
          <h1 id="manu">grafico em manutenção*</h1>
          <Graphic2>
            <Top>
              <div>
                <h1>Utilização mensal de verba</h1>
              </div>
              <Filtros>
                <div>
                  <label>Mês:</label>
                  <select name="mes">
                    <option value="m1">Janeiro</option>
                    <option value="m2">Fevereiro</option>
                    <option value="m3">Março</option>
                  </select>
                </div>
                <div>
                  <label>Ano:</label>
                  <select name="ano">
                    <option value="a1">2021</option>
                    <option value="a2">2020</option>
                    <option value="a3">2019</option>
                  </select>
                </div>                        
              </Filtros>
            </Top>
            <Bottom>
              <Graph>
                <Left>
                  <p>R$ 100.000,00</p>
                  <p>R$ 60.000,00</p>
                  <p>R$ 20.000,00</p>
                  <p>0</p>
                </Left>
                <Right>
                  <Square>
                    <Pack>
                      <Bar valor={18000}></Bar>
                      <Bar valor={1250000}></Bar>
                      <Bar valor={63000}></Bar>
                      <Bar valor={22000}></Bar>
                    </Pack>
                    <Pack>
                      <Bar valor={63000}></Bar>
                      <Bar valor={22000}></Bar>
                      <Bar valor={18000}></Bar>
                      <Bar valor={1250000}></Bar>
                    </Pack>
                    <Pack>
                      <Bar valor={18000}></Bar>
                      <Bar valor={22000}></Bar>
                      <Bar valor={1250000}></Bar>
                      <Bar valor={63000}></Bar>
                    </Pack>
                  </Square>
                </Right>
              </Graph>
              <Footer>
                <p>JAN 2021</p>
                <p>FEV 2021</p>
                <p>MAR 2021</p>
              </Footer>
            </Bottom>
          </Graphic2>
        </ContainerDetails>
      </Container>
    </>
  );
};

export default Details;