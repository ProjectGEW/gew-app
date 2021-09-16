import React, { useState, useCallback } from 'react';

import MenuLeft from '../components/MenuLeft';
import Navbar from '../components/Navbar';
import MenuRight from '../components/MenuRight';

import { ContIcons } from '../components/MenuRight/styles';
import { AiOutlineCaretDown, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsSearch, BsFillPersonLinesFill } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';

import { ConsultantData, Container, PricePerHour, SideContainer, SupplierData, UserData } from './styles';
import Footer from '../components/Footer';
import { RiLockPasswordLine } from 'react-icons/ri';

import api from "../../service/api";

interface CadConsultants {
    infoConsultor: Consultor;
    infoFornecedor: Fornecedor;
}

interface Fornecedor {
    nome: string;
    email: string;
}

interface Consultor {
    numero_cracha: number;
    nome: string;
    email: string;
    senha: string;
    cpf: number;
    telefone: string;
    valor_hora: number;
}

const RegisterConsultants: React.FC = () => {
    const setConsultorInfos = useCallback( async () => {
        const numero_cracha = parseInt((document.getElementById("numero_cracha") as HTMLInputElement).value);
        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const senha = (document.getElementById("senha") as HTMLInputElement).value;
        const cpf = parseInt((document.getElementById("cpf") as HTMLInputElement).value);
        const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
        const valor_hora = parseFloat((document.getElementById("valor_hora") as HTMLInputElement).value);

        const consultor: Consultor = {
            numero_cracha: numero_cracha,
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            telefone: telefone,
            valor_hora: valor_hora
        };

        await api.post(`funcionarios/consultor`, consultor);
    }, []);

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
                            <input type='text' id="nome" />
                            <GoPencil />
                        </div>
                        <div className="box3">
                            <label>CPF:</label>
                            <input type='text' id="cpf" placeholder='---.---.--- - --' />
                            <BsFillPersonLinesFill />
                        </div>
                        <div className="box4">
                            <label>Telefone:</label>
                            <input type='text' id="telefone" placeholder='(..).....-....' />
                            <AiOutlinePhone />
                        </div>
                        <div className="box3">
                            <label>N° do crachá:</label>
                            <input type='text' id="numero_cracha" placeholder='------' />
                            <BsFillPersonLinesFill />
                        </div>
                    </ConsultantData>
                    <PricePerHour>
                        <h1>Preço por hora</h1>
                        <div>
                            <label>Valor horista:</label>
                            <input type='text' id="valor_hora" placeholder="R$  --,--" />
                        </div>
                    </PricePerHour>
                </SideContainer>
                <SideContainer>
                    <UserData>
                        <h1>Dados do usuário</h1>

                        <div className="box1">
                            <label>Email do usuário:</label>
                            <input type='text' id="email" />
                            <AiOutlineMail />
                        </div>
                        <div className="box1">
                            <label>Senha:</label>
                            <input type='password' id="senha" placeholder="********" />
                            <RiLockPasswordLine />
                        </div>
                    </UserData>
                    <SupplierData>
                        <h1>Fornecedor</h1>

                        <div className="box5">
                            <label>Nome:</label>
                            <input type='text'  />
                            <BsSearch />
                        </div>
                    </SupplierData>

                    <button id="enviarDados" onClick={setConsultorInfos}>
                        Cadastrar
                    </button>
                    
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