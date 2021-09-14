import React from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import { AiOutlineCaretDown, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsSearch, BsFillPersonLinesFill } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';

import { ConsultantData, Container, PricePerHour, SideContainer, SupplierData, UserData } from './styles';
import Button from '../components/Button';
import Footer from '../components/Footer';
import internal from 'stream';
import { RiLockPasswordLine } from 'react-icons/ri';

interface CadConsultants {
    infoConsultants: {
            nome: string;
            email: string;
            cpf: number;
            telefone: number;
            precoPorHora: number;
    };

    infoSupplier: {
        nome: string;
        email: string;
    }
}

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
                            <GoPencil />
                        </div>
                        <div className="box3">
                            <label>CPF:</label>
                            <input type='text' placeholder='---.---.--- - --' />
                            <BsFillPersonLinesFill />
                        </div>
                        <div className="box4">
                            <label>Telefone:</label>
                            <input type='text' placeholder='(--) ----- - ----' />
                            <AiOutlinePhone />
                        </div>
                        <div className="box3">
                            <label>N° do crachá:</label>
                            <input type='text' placeholder='------' />
                            <BsFillPersonLinesFill />
                        </div>
                    </ConsultantData>
                    <PricePerHour>
                        <h1>Preço por hora</h1>
                        <div>
                            <label>Valor horista:</label>
                            <input type='text' placeholder="R$  --,--" />
                        </div>
                    </PricePerHour>
                </SideContainer>
                <SideContainer>
                    <UserData>
                        <h1>Dados do usuário</h1>

                        <div className="box1">
                            <label>Email do usuário:</label>
                            <input type='text' />
                            <AiOutlineMail />
                        </div>
                        <div className="box1">
                            <label>Senha:</label>
                            <input type='password' placeholder="********" />
                            <RiLockPasswordLine />
                        </div>
                    </UserData>
                    <SupplierData>
                        <h1>Dados do fornecedor</h1>

                        <div className="box1">
                            <label>E-mail do fornecedor:</label>
                            <input type='text' />
                            <AiOutlineMail />
                        </div>
                        <div className="box5">
                            <label>Fornecedor:</label>
                            <input type='text'  />
                            <BsSearch />
                        </div>
                    </SupplierData>

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