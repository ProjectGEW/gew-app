import React, { useState, useCallback, useEffect } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';
import Footer from '../../components/Footer';

import api from "../../service/api";

import { AiOutlineCaretDown, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { RiLockPasswordLine } from 'react-icons/ri';

import { ConsultantData, Container, PricePerHour, SideContainer, SupplierData, UserData } from './styles';

import { vrfCampo, verificaCadConsultor, verificaFornecedor } from "../../utils/confereCampo";

import { successfulNotify, errorfulNotify } from '../../hooks/SystemToasts';

//import analisaValor from "../../utils/analisaValor";

interface CadConsultor {
    funcionario: Consultor;
    nome_fornecedor: string;
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

interface Fornecedor {
    nome: string;
}

const RegisterConsultants: React.FC = () => {
    const [suppliers, setSuppliers] = useState<Fornecedor[]>([]);

    // const token = localStorage.getItem('Token');
    // let config = {
    //     headers: { Authorization: `Bearer ${token}`},
    // };

    const formatCpf= () => {
        var ao_cpf = (document.getElementById("cpf") as HTMLInputElement).value;

        ao_cpf = ao_cpf.replace( /\D/g , ""); //Remove tudo o que não é dígito
                    
        if (ao_cpf.length > 3){
            ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
            (document.getElementById("cpf") as HTMLInputElement).value = ao_cpf;

            if (ao_cpf.length > 6) {
                ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
                (document.getElementById("cpf") as HTMLInputElement).value = ao_cpf;

                if (ao_cpf.length > 9) {
                    ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2");
                    (document.getElementById("cpf") as HTMLInputElement).value = ao_cpf;
                }
            }
        } else{
            console.log("CPF invalido");
        }
    }

    const formatTelefone= () => {
        var telefone = (document.getElementById("telefone") as HTMLInputElement).value;  

        telefone = telefone.replace( /\D/g , "");
                    
        if (telefone.length > 2){
            telefone = telefone.replace(/^(\d{2})(\d)/g,"($1)$2");
            (document.getElementById("telefone") as HTMLInputElement).value = telefone;

            if (telefone.length > 5) {
                telefone = telefone.replace(/(\d{5})(\d{4})$/,"$1-$2");
                (document.getElementById("telefone") as HTMLInputElement).value = telefone;
            }
        }
    }

    function resetarCampos() {
        const inputs = ["numero_cracha", "nome", "email", "senha", "cpf", "telefone", "valor_hora"];

        for (let i = 0; i < inputs.length; i ++){ 
            (document.getElementById(inputs[i]) as HTMLInputElement).value = "";
        }

        (document.getElementById("nome_fornecedor") as HTMLSelectElement).value = "Todos";
    }

    async function enviarInfo(consultor: CadConsultor) {
        try {
            await api.post(`funcionarios/consultor`, consultor)
                .then(() => {
                    successfulNotify('Consultor cadastrado com sucesso!');
                    resetarCampos();
                })
                .catch((e) => 
                    errorfulNotify(e.response.data.titulo)
                );
        } catch (error) {
            console.log(`Error: ${error}`);
            errorfulNotify('Não foi possivel realizar o cadastro do consultor!'); 
        }
    }

    const setConsultorInfos = useCallback( async () => {
        const numero_cracha = parseInt((document.getElementById("numero_cracha") as HTMLInputElement).value);
        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const senha = (document.getElementById("senha") as HTMLInputElement).value;
        const cpf = (document.getElementById("cpf") as HTMLInputElement).value.split(".");
        const cpfFormat = parseInt(cpf[0] + cpf[1] + cpf[2].split("-")[0] + cpf[2].split("-")[1]);
        const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
        const valor_hora = parseFloat((document.getElementById("valor_hora") as HTMLInputElement).value);
        const nome_fornecedor =(document.getElementById("nome_fornecedor") as HTMLSelectElement).value;

        const consultor: CadConsultor = {
            funcionario: {
                numero_cracha: numero_cracha,
                nome: nome,
                email: email,
                senha: senha,
                cpf: cpfFormat,
                telefone: telefone,
                valor_hora: valor_hora
            },
            nome_fornecedor: nome_fornecedor
        };

        enviarInfo(consultor);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        api.get("fornecedores").then((response) => {
            setSuppliers(response.data);
        })
    });

    return (
        <>
        <Navbar />
        <MenuLeft />
    
        <Container>
            <header>
                <h1>Cadastrar Consultor</h1>
                <AiOutlineCaretDown />
            </header>
            <SideContainer>
                <ConsultantData>
                    <h1>Dados do consultor</h1>
                    <div className="box1">
                        <label>Nome:</label>
                        <input 
                            type='text' 
                            id="nome" 
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                        />
                        <GoPencil />
                    </div>
                    <div className="box3">
                        <label>CPF:</label>
                        <input 
                            type='text' 
                            id="cpf" 
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)} 
                            onChange={formatCpf} 
                            maxLength={14} 
                        />
                        <BsFillPersonLinesFill />
                    </div>
                    <div className="box4">
                        <label>Telefone:</label>
                        <input 
                            type='text' 
                            id="telefone"
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                            onChange={formatTelefone} 
                            maxLength={14} 
                        />
                        <AiOutlinePhone />
                    </div>
                    <div className="box3">
                        <label>N° do crachá:</label>
                        <input 
                            type='text' 
                            id="numero_cracha" 
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                        />
                        <BsFillPersonLinesFill />
                    </div>
                </ConsultantData>
                <PricePerHour>
                    <h1>Preço por hora</h1>
                    <div>
                        <label>Valor horista:</label>
                        <input 
                            type='text' 
                            id="valor_hora"
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                        />
                    </div>
                </PricePerHour>
            </SideContainer>
            <SideContainer>
                <UserData>
                    <h1>Dados de Login</h1>

                    <div className="box1">
                        <label>Email do usuário:</label>
                        <input 
                            type='email' 
                            id="email"
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                        />
                        <AiOutlineMail />
                    </div>
                    <div className="box1">
                        <label>Senha:</label>
                        <input 
                            type='password' 
                            id="senha"
                            onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                        />
                        <RiLockPasswordLine />
                    </div>
                </UserData>
                <SupplierData>
                    <h1>Fornecedor</h1>

                    <div className="box5">
                        <label>Nome:</label>
                        <select 
                            name="secao" 
                            id="nome_fornecedor"
                            onChange={verificaFornecedor}
                        >
                            <option value="Todos">Todos</option>
                            {
                            suppliers ?
                                suppliers.map(supplier =>
                                    <option value={supplier.nome}>{supplier.nome}</option>
                                )
                                :
                                'Nenhum fornecedor foi encontrado'
                            }
                        </select>
                    </div>
                </SupplierData>
                <button id="enviarDados" onClick={() => {
                    if (verificaCadConsultor() === 0) {
                        setConsultorInfos();
                    }
                }}>
                    Cadastrar
                </button>              
            </SideContainer>
            <Footer tipo={"register_consultants"} />
        </Container>
        <MenuRight>
            <ContIcons />
        </MenuRight>
        </>
    );
};

export default RegisterConsultants;