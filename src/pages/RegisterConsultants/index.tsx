import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { ConsultantData, Container, PricePerHour, SideContainer, SupplierData } from './styles';
import Button from '../components/Button';
import Footer from '../components/Footer';

const RegisterConsultants: React.FC = () => {

    return (
        <>
            <Navbar />
            <MenuLeft />
        
            <Container>
                <header>
                    <h1>Cadastrar consultor</h1>
                    <AiOutlineCaretDown />
                </header>
                <SideContainer>
                    <ConsultantData>
                        <h1>Dados do consultor</h1>

                        <div className="box1">
                            <label>Nome:</label>
                            <input type='text' />
                        </div>
                        <div className="box2">
                            <label>E-mail do consultor:</label>
                            <input type='text' />
                        </div>
                        <div className="box3">
                            <label>CPF:</label>
                            <input type='text' />
                        </div>
                        <div className="box4">
                            <label>Telefone:</label>
                            <input type='text' />
                        </div>
                    </ConsultantData>
                </SideContainer>
                <SideContainer>
                    <SupplierData>
                        <h1>Dados do fornecedor</h1>

                        <div className="box1">
                            <label>E-mail do fornecedor:</label>
                            <input type='text' />
                        </div>
                        <div className="box5">
                            <label>Fornecedor:</label>
                            <input type='text' />
                        </div>
                    </SupplierData>
                    <PricePerHour>
                        <h1>Preço por hora</h1>
                        <div>
                            <label>Valor horista:</label>
                            <input type='text' />
                        </div>
                    </PricePerHour>

                    <Button tipo={"register_consultants"} text={"Cadastrar"} />
                    
                </SideContainer>
                <Footer tipo={"register_consultants"}>
                        
                </Footer>
            </Container>

            <MenuRight>
                <ContIcons />
            </MenuRight>
        </>
        );
};

export default RegisterConsultants;