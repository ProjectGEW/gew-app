import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, ContainerInfo, ContainerTitle, ContainerFiltro, Table, TableDimensions, TableScroll } from './style';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import api from "../../../service/api";

import intl from 'react-intl-universal';
import { IoMdArrowDropright } from 'react-icons/io';

const locales = {
    'pt-BR': require('../../../language/pt-BR.json'),
    'en-US': require('../../../language/en-US.json'),
    'es': require('../../../language/es.json'),
    'fr-FR': require('../../../language/fr-FR.json'),
};

interface ListRoute {
    tipo?: string;
}

interface IConsultor {
    numero_cracha: number;
    status: string;
    nome: string;
    projetos: number[];
}

const ConsultantList: React.FC<ListRoute> = ({tipo}) => {
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
    const { numeroDoProjeto }: {numeroDoProjeto: string}  = useParams();

    window.onload = async function handleConsultores() {
        await api.get("funcionarios/consultor").then((response) => {
            setConsultants(response.data);
        });
        console.log(numeroDoProjeto);
    }

    const atribuir = useCallback( async (numero_cracha) => {
        await api.post(`projetos/atrelar/${numeroDoProjeto}/${numero_cracha}`);
    }, [numeroDoProjeto]);

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
                    {/* <div> */}
                        <div>
                            <label>Consultor:</label>
                            <input type="text" placeholder="Pesquise aqui..." />
                        </div>
                        <div>
                            <label>{intl.get('tela_projetos.filtros.segundo')}:</label>
                            <form>
                                <button type="submit" id="Todos" className="0">Todos</button>
                                <button type="submit" id="atrasado" className="1">Ativo</button>
                                <button type="submit" id="em_andamento" className="2">Inativo</button>
                            </form>
                        </div>
                        <div>
                            <label>Projeto:</label>
                            <input type="text" placeholder="Pesquise aqui..." />
                        </div>
                    {/* </div> */}
                </ContainerFiltro>
            </ContainerInfo>
            <TableDimensions tipo={tipo}>
            <Table tipo={tipo}>
                <div id='header'>
                    <div className='cadastro'>Cadastro</div>
                    <div className='status'>Status</div>
                    <div className='nome'>Nome Completo</div>
                    <div className='projetos'>Projetos</div>
                    <div className='atribuicao'>Atribuição</div>
                </div>
                <TableScroll>
                {consultants.map(consultant => (
                    <tr id='column'>
                        <td className='cadastro'>{consultant.numero_cracha}</td>
                        <td className='status' id={`status${consultant.numero_cracha}`}>{consultant.status}</td>
                        <td className='nome'>{consultant.nome}</td>
                        <td className='projetos'>
                            {consultant.projetos.length > 1 ? 
                                <select>
                                    {consultant.projetos.map(projeto => (
                                        <option>{projeto}</option>
                                    ))}
                                </select> 
                            : consultant.projetos.length > 0 ? consultant.projetos : ""}
                        </td>
                        <td className='atribuicao'>
                            <button onClick={() => atribuir(consultant.numero_cracha)}>Atribuir</button>
                        </td>
                    </tr>
                ))}
                </TableScroll>
            </Table>
            </TableDimensions>
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default ConsultantList;