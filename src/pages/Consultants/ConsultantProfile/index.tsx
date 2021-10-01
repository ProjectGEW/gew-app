import React from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import { Container, MainProfileGrid, Email, Tittle } from './style';
import { Arrow, Table, TableDimensions, TableScroll } from '../ConsultantsList/style';
import { HiArrowNarrowLeft } from 'react-icons/hi';



const ConsultantProfile: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <Container>
                <Arrow>
                    <HiArrowNarrowLeft />
                </Arrow>
                <MainProfileGrid>
                    <div id="photo">
                        <div id="user" />
                        <div id="text">
                            <h2>STATUS:</h2><h3>ATIVO</h3>
                        </div>
                    </div>
                    <div id="desc">
                        <div id="dataone">
                            <h1>HELOISE BIANCA STEPHANY BERNARDES</h1>
                        </div>
                        <div id="datatwo">
                            <h2>Cadastro:</h2><h3>70001</h3>
                            <h2>Data do cadastro:</h2><h3>20/10/2020</h3>
                        </div>
                        <div id="datatwo">
                            <h2>Fornecedor:</h2><h3>Abapcom</h3>
                            <h2>Valor da hora:</h2><h3>R$ 20,00</h3>
                        </div>
                        <div id="dataone">
                            <Email>
                                <h2>E-mail do consultor:</h2><h3>heloisebernardes@abapcom.com</h3>
                            </Email>
                            <Email>
                                <h2>E-mail do fornecedor:</h2><h3>contato@abapcom.com</h3>
                            </Email>
                        </div>
                    </div>
                </MainProfileGrid>
                <Tittle>
                    Projetos atribuídos
                </Tittle>
                <TableDimensions tipo={'Perfil'}>
                <Table tipo={'Perfil'}>
                    <div id='header'>
                        <div className='cadastro'>Número</div>
                        <div className='status'>Status</div>
                        <div className='nome'>Título de Demanda</div>
                        <div className='projetos'>CC Pagante</div>
                        <div className='projetos'>Criação</div>
                        <div className='atribuicao'>Atribuição</div>
                    </div>
                    <TableScroll>
                    <tr id='column'>
                        <td className='cadastro'>Cadastro</td>
                        <td className='status'>Ativo</td>
                        <td className='nome'>Nome Completo</td>
                        <td className='projetos'>Projetos</td>
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

export default ConsultantProfile;