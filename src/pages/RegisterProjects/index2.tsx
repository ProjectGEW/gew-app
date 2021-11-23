import React from 'react';

import MenuLeft from '../components/MenuLeft';
import MenuRight from '../components/MenuRight';
import Navbar from '../components/Navbar';

import { ContIcons } from '../components/MenuRight/styles';
import VoltarAoTopo from '../components/VoltarAoTopo';

import { FiRefreshCcw, FiInfo } from 'react-icons/fi';

import { Container, ContainerRegister, Info, Content, Projetos, Responsavel, Gastos,
Total, Table, Linha, Datas } from './styles2';

import { RiPauseCircleFill } from 'react-icons/ri';

const CadastroProjeto: React.FC = () => {
  return (
    <>
    <Navbar />
    <MenuLeft />
    <h6 id="topo"/>
    <Container id="set-data" >
      <ContainerRegister id="ContainerRegister">
        <Info>  
          <h1>Cadastrar Projeto</h1>
        </Info>
        <Content id="content">
          <Projetos>
            <h1>Descrição geral do projeto</h1>
            <div id="primeiraLinha">
              <div>
                <label htmlFor="">Número do projeto</label>
                <input type="text" id="numeroProjeto" />
                <p id="numeroProjetoResponse" className="msgErro">Erro nesse parte, teste*</p>
              </div>
              <div>
                <label htmlFor="">Número da ATA</label>
                <input type="text" id="ataNome" />
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
                  <input type="text" id="titulo" />
                  <p id="tituloResponse" className="msgErro">Erro nesse parte, teste</p>
                </div>
                <div>
                  <label>Descrição do projeto: </label>
                  <input type="text" id="descricao" />
                  <p id="descricaoResponse" className="msgErro">Erro nesse parte, teste</p>
                </div>
              </div>
              <div id="ladoDireito">
                <iframe src="file:///C:/Users/Aluno/Documents/ATA_implantacao.pdf"></iframe>
              </div>
            </div>
          </Projetos>
          <Responsavel>
            <h1>Responsáveis pelo projeto</h1>
            <div id="primeiraLinha">
              <h1>Responsável <FiRefreshCcw size={20}/></h1>
              <div>
                <div>
                  <label htmlFor="cracha_responsavel">Crachá</label>
                  <input type="text" id="cracha_responsavel" />
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
                  <input type="text" id="cracha_solicitante" />
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
            <h1>Despesas & Seções pagantes</h1>
            <div id="primeiraLinha">
              <Table>
                <div className="table">
                  <h1>Despesas (gastos)</h1>
                  <h1>Esforço</h1>
                  <h1>Valor (R$)</h1>
                </div>
                <div id="scroll">
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                </div>
                <Total>
                  <div>
                    <button onClick={() => alert(0)}>Adicionar</button>
                    <button onClick={() => alert(0)}>Remover</button>
                  </div>
                  <div>
                    <h2>TOTAL:</h2>
                    <input id="totalEsforco" type="number" value="" disabled/>
                    <input id="totalValor" type="text" value="" disabled/>
                    <RiPauseCircleFill id="soma" onClick={() => alert(0)}/>
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
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                  <Linha id={`D1`} >
                    <input type="text" defaultValue=''/>
                    <input type="number"  defaultValue='0'/>
                    <input type="number" defaultValue='0'/>
                  </Linha>
                </div>
                <Total>
                  <div>
                    <button onClick={() => alert(0)}>Adicionar</button>
                    <button onClick={() => alert(0)}>Remover</button>
                  </div>
                  <div>
                    <h2>TOTAL:</h2>
                    <input id="totalValor" type="text" value="" disabled/>
                    <RiPauseCircleFill id="soma" onClick={() => alert(0)}/>
                  </div>
                </Total>
              </Table>
            </div>
          </Gastos>
          <Datas>
            <h1>Datas</h1>
          </Datas>
        </Content>
      </ContainerRegister>
    </Container>
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