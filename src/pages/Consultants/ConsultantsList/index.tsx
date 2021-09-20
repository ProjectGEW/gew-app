import React from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, Arrow, Tittle, Table, TableDimensions, TableScroll } from './style';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const ConsultantList: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container> 
                <Arrow>
                    <HiArrowNarrowLeft />
                </Arrow>
                <Tittle>Consultores Registrados</Tittle>
                <TableDimensions>
                <Table>
                    <div id='header'>
                        <div className='cadastro'>Cadastro</div>
                        <div className='status'>Status</div>
                        <div className='nome'>Nome Completo</div>
                        <div className='projetos'>Projetos</div>
                        <div className='atribuicao'>Atribuição</div>
                    </div>
                    <TableScroll>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
                        <td className='atribuicao'>
                            <button>Atribuir</button>
                        </td>
                    </tr>
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