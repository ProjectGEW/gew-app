import React, { useState, useCallback } from 'react';

import MenuLeft from '../../components/MenuLeft';
import Navbar from '../../components/Navbar';
import MenuRight from '../../components/MenuRight';
import { ContIcons } from '../../components/MenuRight/styles';

import api from "../../service/api";

import { AiOutlineClose } from 'react-icons/ai';

import { Container, ContainerTitle, ContainerInfo, ContainerProject, Box, Salvar } from './styles';

import { vrfCampo, verificaFornecedor } from "../../utils/confereCampo";

import { successfulNotify, errorfulNotify } from '../../hooks/SystemToasts';

interface CadConsultor {
  funcionarioData: Consultor;
  fornecedor: string;
  skills: string[];
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

interface ITag {
  nome: string;
}

const RegisterConsultants: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Fornecedor[]>([]);

  // const token = localStorage.getItem('Token');
  // let config = {
  //     headers: { Authorization: `Bearer ${token}`},
  // };

  const [tags, setTags] = useState<ITag[]>([]);

  const separaTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.toLocaleLowerCase();
    let transforma = "";

    for (let y = 0; y < valor.length - 1; y++) {
      transforma = transforma + valor[y];
    }

    for (let i = 0; i < tags.length; i++) {
      if(tags[i].nome.toLocaleLowerCase() === transforma) {
        return;
      }
    }

    for (let i = 0; i < valor.length; i++) {
      if(valor[i] === ',') {
        setTags([...tags, {nome: transforma}]);  
        event.target.value = '';
      }
    }    
  }

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
    let transforma = "";
    
    setTags([...tags, {nome: transforma}]); 

    for (let i = 0; i < inputs.length; i ++){ 
      (document.getElementById(inputs[i]) as HTMLInputElement).value = "";
    }

    (document.getElementById("nome_fornecedor") as HTMLSelectElement).value = "Todos";
  }

  async function enviarInfo(consultor: CadConsultor) {
    try {
      await api.post(`consultores`, consultor)
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

  const setConsultorInfos = useCallback(async () => {
    const numero_cracha = parseInt((document.getElementById("numero_cracha") as HTMLInputElement).value);
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const senha = (document.getElementById("senha") as HTMLInputElement).value;
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value.split(".");
    const cpfFormat = parseInt(cpf[0] + cpf[1] + cpf[2].split("-")[0] + cpf[2].split("-")[1]);
    const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
    const valor_hora = parseFloat((document.getElementById("valor_hora") as HTMLInputElement).value);
    const nome_fornecedor = (document.getElementById("nome_fornecedor") as HTMLSelectElement).value;
    const skills = tags.map(res => res.nome);
    const consultor: CadConsultor = {
      funcionarioData: {
        numero_cracha: numero_cracha,
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpfFormat,
        telefone: telefone,
        valor_hora: valor_hora
      },
      fornecedor: nome_fornecedor, 
      skills: skills
    };

    enviarInfo(consultor);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   api.get("fornecedores").then((response) => {
  //     setSuppliers(response.data);
  //   })
  // });

  return (
    <>
    <Navbar />
    <MenuLeft />
    <Container>
      <ContainerProject>
        <ContainerInfo>
          <ContainerTitle>
            <h1>Cadastrar consultor</h1>
            {/* <span /> */}
          </ContainerTitle>
        </ContainerInfo>
        <Box>
          <div className="col esq">
            <h1>Dados do consultor</h1>
            <div className="coluna">
              <label>Nome:</label>
              <input 
                type='text' 
                id="nome" 
                onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
              />
            </div>
            <div className="linha">
              <span className="coluna">
                <label>CPF:</label>
                <input 
                  type='text' 
                  id="cpf" 
                  onBlur={(props) => vrfCampo(props.target.value, props.target.id)} 
                  onChange={formatCpf} 
                  maxLength={14} 
                />
              </span>
              <span className="coluna">
                <label>Telefone:</label>
                <input 
                  type='text' 
                  id="telefone"
                  onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                  onChange={formatTelefone} 
                  maxLength={14} 
                />
              </span>
            </div>
            <div className="linha">
              <span className="coluna">
                <label>Nº Crachá:</label>
                <input 
                  type='text' 
                  id="numero_cracha" 
                  onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                />
              </span>
              <span className="coluna">
                <label>Valor horista:</label>
                <input 
                  type='text' 
                  id="valor_hora"
                  onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
                /> 
              </span>
            </div>
            <h1>Fornecedor</h1>
            <div className="coluna">
              <label>Registrados: {suppliers.length}</label>
              <select 
                name="secao" 
                id="nome_fornecedor"
                onChange={verificaFornecedor}>
                <option value="Todos">Todos</option>
                {
                suppliers ?
                  suppliers.map((supplier, index) =>
                    <option key={index} value={supplier.nome}>{supplier.nome}</option>
                  ) : 'Nenhum fornecedor foi encontrado'
                }
              </select>
            </div>
          </div>
          <div className="col dir">
            <h1>Dados de login</h1>
            <div className="coluna">
              <label>E-mail:</label>
              <input 
                type='email' 
                id="email"
                onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
              />
            </div>
            <div className="coluna">
              <label>Senha:</label>
              <input 
                type='password' 
                id='senha'
                autoComplete='off'
                onBlur={(props) => vrfCampo(props.target.value, props.target.id)}
              />
            </div>
            <h1>Skills</h1>
            <div className="coluna">
              <label>Adicione uma tag:</label>
              <div id="boxTags">
                {
                  tags && tags.length > 0 ?
                    tags.map((res, index) => (
                      <a key={res.nome}>{res.nome} <AiOutlineClose onClick={() => {
                        tags.splice(index, 1);
                        setTags([...tags,]);  
                      }}/></a>      
                    ))
                  : <p>Nenhuma tag adicionada</p>
                }
              </div>
              <input 
                type='text'
                id='skill'
                autoComplete='off'
                onChange={separaTag}
              />
              <p id="info">Separe as tags por vírgula ","</p>
            </div>
          </div>
        </Box>
        <Salvar>
          {/* <span/> */}
          <div>
            <button onClick={() => setConsultorInfos}>Cadastrar</button>
          </div>
        </Salvar>
      </ContainerProject>
    </Container>
    <MenuRight>
      <ContIcons />
    </MenuRight>
    </>
  );
};

export default RegisterConsultants;