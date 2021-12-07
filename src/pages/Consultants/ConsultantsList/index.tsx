import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, ContainerInfo, ContainerTitle, ContainerFiltro, Table, TableDimensions,
    TableScroll, LinhaConsultor, PopupPerfilConsultor, Msg, PopupModal } from './style';

import { successfulNotify, errorfulNotify } from '../../../hooks/SystemToasts';

import PerfilConsultor from '../../components/ConsultorPopUp/perfilConsultor';
import PopupProjetosConsultor from '../../components/ConsultorPopUp/projetosConsultor';

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

    const [consultants, setConsultants] = useState<IConsultor[]>([]);
    const [global, setGlobal] = useState<IConsultor[]>([]);
    const { numeroDoProjeto }: {numeroDoProjeto: string} = useParams();

    window.onload = async function handleConsultores() {
        await api.get("funcionarios/consultor").then((response) => {
            setConsultants(response.data); setGlobal(response.data);
        });
    }

    const [recebeCracha, setRecebeCracha] = useState<Number>();
    
    useEffect(() => {
        api.get("funcionarios/consultor").then(response => setConsultants(response.data));
        
        const identifica = consultants.filter(consultor => consultor.funcionarioData.numero_cracha === recebeCracha);
        const salva = identifica.map(consultor => consultor.projetos.indexOf(Number(numeroDoProjeto)));

        if(salva[0] !== undefined) {
            if(salva[0] !== -1) {
                errorfulNotify(`Projeto ${numeroDoProjeto} já está atrelado ao consultor ${recebeCracha}.`);
                setRecebeCracha(undefined);
            } else {
                api.post(`projetos/alocar/${numeroDoProjeto}/${recebeCracha}`).then((response => response.data));
                successfulNotify(`Projeto ${numeroDoProjeto} atrelado ao consultor ${recebeCracha}.`);
                setRecebeCracha(undefined);
            }
        }
    },[numeroDoProjeto, recebeCracha]);

    function defineStatus(valor: string) {
        var btns = ["Todos", "ativo", "inativo"];

        for (var x = 0; x < btns.length; x++) {
            document.getElementById(btns[x])!.style.backgroundColor = "rgba(212, 212, 212, 0.3)";
        }

        if (valor === "ativo") {
            document.getElementById(valor)!.style.backgroundColor = "#adffb0";
        } else if (valor === "inativo") {
            document.getElementById(valor)!.style.backgroundColor = "#ffbfbf";
        } else if (valor === "") {
            document.getElementById(btns[0])!.style.backgroundColor = "rgba(212, 212, 212, 0.7)";
        }
    }

    async function filtraPorStatus(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        const recebeStatus = document.activeElement?.id.toUpperCase();

        if(recebeStatus !== 'TODOS') {
            setConsultants(global.filter(status => status.funcionarioData.status === recebeStatus));
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
                            </select>
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <form onSubmit={filtraPorStatus}>
                                <button type="submit" id="Todos" className="0" onClick={() => defineStatus('')}>Todos</button>
                                <button type="submit" id="ativo" className="1" onClick={() => defineStatus('ativo')}>Ativo</button>
                                <button type="submit" id="inativo" className="2" onClick={() => defineStatus('inativo')}>Inativo</button>
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
                {consultants ? consultants.map((consultant, index) => (  
                    <LinhaConsultor id='column' status={consultant.funcionarioData.status} key={index}>
                        <span className='cadastro'>{consultant.funcionarioData.numero_cracha}</span>
                        <span className='status' id={`status${consultant.funcionarioData.numero_cracha}`}>{consultant.status}</span>
                        <span className='nome'>{consultant.funcionarioData.nome}</span>
                        <span className='fornecedor'>...</span>
                        <span className='projetos'>
                            {consultant.projetos.length > 0 ? 
                                <PopupModal closeOnEscape trigger={<button>Gerenciar</button>} modal>
                                    {(close: any) => (
                                        <PopupProjetosConsultor fechar={close} cracha={consultant.funcionarioData.numero_cracha} projetoSelecionado={Number(numeroDoProjeto)}/>
                                    )}
                                </PopupModal>
                                : ''
                            }
                        </span>
                        <span className='atribuicao'>
                            <button onClick={() => setRecebeCracha(consultant.funcionarioData.numero_cracha)}>Atribuir</button>
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