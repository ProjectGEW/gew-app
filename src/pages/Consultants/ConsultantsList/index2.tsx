import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import MenuLeft from '../../../components/MenuLeft';
import Navbar from '../../../components/Navbar';
import MenuRight from '../../../components/MenuRight';
import { ContIcons } from '../../../components/MenuRight/styles';

import { Container, ContainerInfo, ContainerTitle, ContainerFiltro, Table, TableDimensions,
    TableScroll, LinhaConsultor, PopupPerfilConsultor, Msg, PopupModal, PopupAdicionarHoras,
    TitlePopupHoras, ScrollPopupHoras, ContainerPopupHoras } from './style';

import { successfulNotify, errorfulNotify } from '../../../hooks/SystemToasts';

import PerfilConsultor from '../../../components/ConsultorPopUp/perfilConsultor';
import PopupProjetosConsultor from '../../../components/ConsultorPopUp/projetosConsultor';

import api from "../../../service/api";

import intl from 'react-intl-universal';

// import { PopupModal, PopupTooltip } from '../../Dashboard/styles';

import { IoMdArrowDropright } from 'react-icons/io';
import { ImSearch } from 'react-icons/im';
import { BiHourglass } from 'react-icons/bi';

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

interface IConsultor {
    funcionarioData: {
        numero_cracha: number;
        status: string;
        nome: string;
        email: string;
    },
    projetos: number[];
    skills: [];
    fornecedor: string;
    status: boolean;
}

interface IFornecedor {
    nome: string;
    cnpj: string;
    email: string;
}

const ConsultantList: React.FC = () => {
    const [language] = useState(() => {
        let languageStorage = localStorage.getItem('Language');
        
        if (languageStorage) {
            let languageObject = JSON.parse(languageStorage);
            return languageObject;
        }
    });
    
    intl.init({
        currentLocale: language.code,
        locales
    });
    
    const [global, setGlobal] = useState<IConsultor[]>([]);
    const [consultants, setConsultants] = useState<IConsultor[]>([]);

    const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);

    const [esperaAlteracao, setEsperaAlteracao] = useState(0);

    const { numeroDoProjeto }: {numeroDoProjeto: string} = useParams();
    
    async function handleProject() {
        try {
            await api.get<IConsultor[]>("consultores").then((response) => {
                setConsultants(response.data); 
                setGlobal(response.data);
            });

            await api.get<IFornecedor[]>("fornecedores").then((response) => {
                setFornecedores(response.data); 
            });
        } catch(e) {
            console.log("🚀 ~ file: index2.tsx ~ line 72 ~ handleProject ~ e", e);            
        }
    }

    useEffect(() => {
        handleProject();
    },[]);

    function defineStatus(valor?: boolean) {
        var btns = ["Todos", "true", "false"];

        for (var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        if (valor === true) {
            document.getElementById("true")!.style.backgroundColor = "#adffb0";
        } else if (valor === false) {
            document.getElementById("false")!.style.backgroundColor = "#ffbfbf";
        } else {
            document.getElementById("Todos")!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        const recebeStatus = document.activeElement?.id;

        if(recebeStatus !== 'TODOS') {
            setConsultants(global.filter(status => status.status === (recebeStatus === 'true' ? true : false)));
        } else {
            setConsultants(global);
        }
    }

    const search = async (event: React.ChangeEvent<{ value: string }>) => {
        const recebeTexto = event.target.value;
        if(recebeTexto !== '') {
            setConsultants(global.filter(consultor => 
                consultor.funcionarioData.nome.toLowerCase().includes(recebeTexto.toLocaleLowerCase()) === true || 
                consultor.funcionarioData.numero_cracha.toString().includes(recebeTexto.toLocaleLowerCase()) === true
            ));
        } else {
            setConsultants(global);
        }
    };

    async function alocarConsultor(cracha: number) {
        const pegaConsultor = consultants.filter(res => res.funcionarioData.numero_cracha === cracha).map(res => res.projetos);     

        const recebeHoras = document.getElementById('horas');
        console.log("🚀 ~ file: index2.tsx ~ line 141 ~ alocarConsultor ~ recebeHoras", recebeHoras!.innerHTML);
        
    
        for(let x = 0; x < pegaConsultor.length; x++) {
            if(pegaConsultor[x] === [Number(numeroDoProjeto)]) {
                errorfulNotify(`O projeto ${numeroDoProjeto} já está atrelado ao consultor ${cracha}.`);
            } else {
                try {
                    const horas = { horas: 50 }
                    api.post(`projetos/alocar/${numeroDoProjeto}/${cracha}`, horas);
                    successfulNotify(`Projeto ${numeroDoProjeto} atrelado ao consultor ${cracha}.`);
                    handleProject();
                } catch(e) {
                    console.log("🚀 ~ file: index2.tsx ~ line 154 ~ alocarConsultor ~ e", e);   
                }
            }
        }

    }
    
    return (
        <>
        <Navbar />
        <MenuLeft />
        <Container> 
            <ContainerInfo>
                <ContainerTitle>
                    <h1>Consultores registrados <IoMdArrowDropright size={25} /></h1>
                    <span />
                </ContainerTitle>
                <ContainerFiltro>
                    <h1>Filtros:</h1>
                        <div>
                            <label>Fornecedor:</label>
                            <select>
                                <option value="Todos">Todos</option>
                                {
                                    fornecedores ? fornecedores.map(response =>
                                        <option key={response.cnpj} value={response.nome}>{response.nome}</option>)
                                    : 'Nenhum fornecedor foi encontrado'
                                }
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <form onSubmit={filtraPorStatus}>
                                <button type="submit" id="Todos" className="0" onClick={() => defineStatus()}>Todos</button>
                                <button type="submit" id="true" className="1" onClick={() => defineStatus(true)}>Ativo</button>
                                <button type="submit" id="false" className="2" onClick={() => defineStatus(false)}>Inativo</button>
                            </form>
                        </div>
                        <div>
                            <label>Consultor:</label>
                            <input id="consultor" type="text" placeholder="Pesquise aqui..." onChange={search} />
                        </div>
                </ContainerFiltro>
            </ContainerInfo>
            <TableDimensions>
            <Table>
                <div id='header'>
                    <div className='cadastro'>Cadastro</div>
                    <div className='status'>Status</div>
                    <div className='nome'>Nome completo</div>
                    <div className='fornecedor'>Fornecedor</div>
                    <div className='projetos'>Projetos</div>
                    <div className='atribuicao'>Atribuição</div>
                    <div className='perfil'>Perfil</div>
                </div>
                <TableScroll>
                {consultants && consultants.length > 0 ? consultants.map((consultant, index) => (  
                    <LinhaConsultor id='column' status={consultant.status} key={index}>
                        <span className='cadastro'>{consultant.funcionarioData.numero_cracha}</span>
                        <span className='status' id={`status${consultant.funcionarioData.numero_cracha}`}>{consultant.status}</span>
                        <span className='nome'>{consultant.funcionarioData.nome}</span>
                        <span className='fornecedor'>{consultant.fornecedor}</span>
                        <span className='projetos'>
                            {consultant.projetos ? 
                                consultant.projetos.length > 0 ?
                                <PopupModal closeOnEscape trigger={<button>Gerenciar</button>} modal>
                                    {(close: any) => (
                                        <PopupProjetosConsultor fechar={close} cracha={consultant.funcionarioData.numero_cracha} projetoSelecionado={Number(numeroDoProjeto)}/>
                                    )}
                                </PopupModal>
                                : ''
                            : ''}
                        </span>
                        <span className='atribuicao'>
                            <PopupModal closeOnEscape trigger={<button>Alocar</button>} modal>
                                {(close: any) => (
                                    <ContainerPopupHoras>
                                        <PopupAdicionarHoras>
                                            <TitlePopupHoras>
                                                <h1>Alocar Consultor - {consultant.funcionarioData.numero_cracha}</h1>
                                                <span onClick={close} />
                                            </TitlePopupHoras>
                                            <ScrollPopupHoras>    
                                                <h1>Limite de horas para o projeto {numeroDoProjeto}:</h1>
                                                <div>
                                                    <input type="number" name="qtdHoras" id="horas" />
                                                    <button onClick={() => alocarConsultor(consultant.funcionarioData.numero_cracha)}>Alocar</button>
                                                </div>
                                            </ScrollPopupHoras>
                                        </PopupAdicionarHoras>
                                </ContainerPopupHoras>
                                )}
                            </PopupModal>
                        </span>
                        <span className='perfil'>
                            <PopupPerfilConsultor closeOnEscape trigger={<button><ImSearch size={15} color="#fff"/></button>} modal>
                                {(close: any) => (
                                    <PerfilConsultor nome={consultant.funcionarioData.nome} cracha={consultant.funcionarioData.numero_cracha} email={consultant.funcionarioData.email} fechar={close} />
                                )}
                            </PopupPerfilConsultor>
                        </span>
                    </LinhaConsultor>
                )) : 
                    <Msg>
                        <BiHourglass size={40} />
                        <h1>Nenhum consultor foi encontrado!</h1>
                    </Msg>
                }
                </TableScroll>
            </Table>
            </TableDimensions>
        </Container>
        <MenuRight numeroDoProjeto={Number(numeroDoProjeto)}>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default ConsultantList;