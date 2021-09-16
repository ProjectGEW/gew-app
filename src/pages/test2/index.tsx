import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiMinusCircle } from 'react-icons/hi';
import Button from '../components/Button';

import { ContIcons } from '../components/MenuRight/styles';

import { BoxConfirm, SideContainer, ContentContainer, Box, TableConfirm } from './styles';


const Test2: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />

            <BoxConfirm> 
            <h1>Confirmar Informações</h1>
                <SideContainer>
                    <ContentContainer>
                        <div>
                            <h3>Número do projeto:</h3>
                            <h2>1000025562</h2>
                        </div>
                        <div>
                            <h3>Ata da aprovação:</h3>
                            <h2>1000025562</h2>
                        </div>
                    </ContentContainer>
                    <Box>
                        <div>
                            <h3>Título do projeto:</h3>
                            <h2>WEC - IMPLANTAÇÃO DE EDI CLIENTE XYZ</h2>
                        </div>
                    </Box>
                    <Box>
                        <div>
                            <h3>Descrição do projeto:</h3>
                            <h2>IMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃOIMPLANTAÇÃO</h2>
                        </div>
                    </Box>
                    <ContentContainer>
                        <div>
                            <h3>Nome do responsável:</h3>
                            <h2>ANDRÉ CARLOS DA SILVA</h2>
                        </div>
                        <div>
                            <h3>Seção do responsável:</h3>
                            <h2>ABCDEFGHIJKLM</h2>
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <div>
                            <h3>Nome do solicitante:</h3>
                            <h2>DIEGO CANVAS DE SOUZA</h2>
                        </div>
                        <div>
                            <h3>Seção do solicitante:</h3>
                            <h2>NOPQRSTUVWXYZ</h2>
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <div>
                            <h3>Nome do aprovador:</h3>
                            <h2>JOSÉ RICARDO</h2>
                        </div>
                        <div>
                            <h3>Seção do aprovador:</h3>
                            <h2>ABCDESKAKSSKAS</h2>
                        </div>
                    </ContentContainer>
                </SideContainer>
                <SideContainer>
                    <ContentContainer>
                        <div>
                            <h3>Centro de custo:</h3>
                            <h2>R$ 00,00</h2>
                        </div>
                        <div>
                            <h3>Data de início:</h3>
                            <h2>00/00/0000</h2>
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <div>
                            <h3>Percentual aprovado:</h3>
                            <h2>R$ 00,00</h2>
                        </div>
                        <div>
                            <h3>Data de término:</h3>
                            <h2>00/00/0000</h2>
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <div>
                            <h3>Limite de horas aprovadas:</h3>
                            <h2>00:00</h2>
                        </div>
                        <div>
                            <h3>Data de aprovação:</h3>
                            <h2>00/00/0000</h2>
                        </div>
                    </ContentContainer>

                    <TableConfirm>
                        <div>
                            <p>Funcionários alocados</p>
                            <AiOutlineUsergroupAdd />
                        </div>    
                        <ul>                    
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                            <li>
                                <p>Heloise Stefany Bianchi</p>
                                <HiMinusCircle />
                            </li>
                        </ul>
                    </TableConfirm>
                </SideContainer>
                <Button  tipo={"Confirmar"} text={"Confirmar"} />
            </BoxConfirm>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default Test2;