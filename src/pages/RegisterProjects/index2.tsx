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
import { RiPauseCircleFill } from 'react-icons/ri';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FaEquals } from 'react-icons/fa';

import { Container, ContainerRegister, Info, Content, Projetos, Responsavel, Gastos,
Total, Table, Linha, Datas, Finalizar, PopupModal, ContainerPopup, BoxPopup } from './styles2';


const CadastroProjeto: React.FC = () => {
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
            <h1>Responsáveis pelo projeto <FiInfo size={20}/></h1>
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
            <h1>Despesas & Seções pagantes <FiInfo size={20}/></h1>
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
                    <FaEquals id="soma" onClick={() => alert(0)}/>
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
                    <FaEquals id="soma" onClick={() => alert(0)}/>
                  </div>
                </Total>
              </Table>
            </div>
          </Gastos>
          <Datas>
            <h1>Datas <FiInfo size={20}/></h1>
            <div id="primeiraLinha">
              <div>
                <label htmlFor="">Data de início:</label>
                <input type="text" id="data_de_inicio" />
              </div>
              <div>
                <label htmlFor="">Data de término:</label>
                <input type="text" id="data_de_termino" />
              </div>
              <div>
                <label htmlFor="">Data de aprovação:</label>
                <input type="text" id="data_de_aprovacao" />
              </div>
            </div>
            <div id="segundaLinha">
              <Calendar calendarType={'US'} className={"calendario"} />
            </div>
          </Datas>
          <Finalizar>
            <PopupModal closeOnEscape trigger={
              <span id='button-holding'> 
                <Button tipo={"continuarCadastro"} text={"Confirmar"} />
              </span>
            } modal>
              {(close: any) => (
                <ContainerPopup>
                  <BoxPopup>
                    <h1 className="header">
                      <IoMdClose id="voltar" onClick={() => close()}/>
                      Confirmar informações
                    </h1>
                    <div>
                      <div id="ladoEsquerdo">
                        <div className="projeto">
                          <h1>Dados do projeto</h1>
                          <div className="linhaUm">
                            <div>
                              <label>Número do projeto:</label>
                              <p>188224647</p>
                            </div>
                            <div>
                              <label>Ata de aprovação:</label>
                              <p>ASD213SD3213S1</p>
                            </div>
                          </div>
                          <div className="linhaDois">
                            <div>
                              <label>Título do projeto:</label>
                              <p>WEC - Implantação de Sistemas</p>
                            </div>
                          </div>
                          <div className="linhaTres">
                            <div>
                              <label>Descrição do projeto:</label>
                              <textarea id="descricao" disabled/>
                            </div>
                          </div>
                        </div>
                        <div className="responsavel">
                          <h1>Encarregados</h1>
                          <div className="linhaUm">
                            <div>
                              <label>Crachá do responsável:</label>
                              <p>4234242112</p>
                            </div>
                            <div>
                              <label>Nome do responsável:</label>
                              <p>João Antônio de Oliveira</p>
                            </div>
                          </div>
                          <div className="linhaDois">
                            <div>
                              <label>Crachá do solicitante:</label>
                              <p>1232132132</p>
                            </div>
                            <div>
                              <label>Nome do solicitante:</label>
                              <p>José da Silva</p>
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
                              <label>Centro de custo:</label>
                              <p>R$ 0,00</p>
                            </div>
                            <div>
                              <label>Percentual Aprovado:</label>
                              <p>0%</p>
                            </div>
                          </div>
                        </div>
                        <div className="datas">
                          <h1>Datas</h1>
                          <div className="linhaUm">
                            <div>
                              <label>Data de início:</label>
                              <p><AiOutlineCalendar /> 00/00/0000</p>
                            </div>
                            <div>
                              <label>Data de término:</label>
                              <p><AiOutlineCalendar /> 00/00/0000</p>
                            </div>
                            <div>
                              <label>Data de aprovação:</label>
                              <p><AiOutlineCalendar /> 00/00/0000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BoxPopup>
                </ContainerPopup>
              )}
            </PopupModal>
          </Finalizar>
        </Content>
      </ContainerRegister>
    </Container>
    {
      // Ativa botão para voltar pro topo da página
      document.scrollingElement!?.scrollTop >= 480 ? <VoltarAoTopo idRedirect="#topo"/> : ''
    }
    <MenuRight>
      <ContIcons />
    </MenuRight>
    </>
  );
}

export default CadastroProjeto;