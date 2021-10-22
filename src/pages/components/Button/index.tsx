import React from "react";

import { Container } from "./style";

interface buttonProps {
  text?: string;
  rota?: string;
  tipo?: string;
  numeroProjeto?: number;
  teste?: IProjetos;
}

interface IProjetos {
  infosProjetosInputDTO?: {
    numeroDoProjeto: number;
    titulo: string;
    descricao: string;
    nome_responsavel: string;
    nome_solicitante: string;
    data_de_inicio: string;
    data_de_termino: string;
    data_de_aprovacao: string;    
  },
  despesaInputDTO?: IDespesas[];
  ccPagantesInputDTO?: ICCpagantes[];
}

interface IDespesas {
  nome: string;
  esforco: number;
  valor: number;
}

interface ICCpagantes{
  centro_de_custo_id: string;
  valor: number;
}

const Button: React.FC<buttonProps> = ({text, rota, tipo, numeroProjeto}) => {
  function redirecionamentoDeRotas() {
    if(numeroProjeto != null) {
        return window.location.href = `http://localhost:3000/${rota}/${numeroProjeto}`;
    }
      
    if(rota == null) {
      return;
    }
    
    return window.location.href = `http://localhost:3000/${rota}`;
  }
  
  return (
    <>
      <Container tipo={tipo}><button onClick={redirecionamentoDeRotas}>{text}</button></Container>
    </>
  );
 };

export default Button;