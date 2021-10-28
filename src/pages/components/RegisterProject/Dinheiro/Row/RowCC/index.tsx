import React from "react"

import api from "../../../../../../service/api";
import { Linha } from "../../styles";

interface ISecaoResponse {
  nome: string;
}

interface Iteste {
  number: number;
}

async function handleSecao(numero: string, campo: string){ 
  try {
    const response = await api.get<ISecaoResponse>(`funcionarios/secao/${numero}`);
    const data = response.data;

    (document.getElementById(campo) as HTMLInputElement).value = data.nome;

  } catch (err) {
    console.log(err);
  }
}

const RowCcPagantes: React.FC<Iteste> = ({number}) => {

  const conCatCentroDeCusto = `centro${number}`;
  const conCatValor = `valorC${number}`;

  const conCatResponsavel = `responsavel${number}`;
  
  return (
    <Linha id={`C${number}`}>
      <input type="text" id={conCatCentroDeCusto} placeholder="092765143" onBlur={(props) => {
        if (props.target.value === "") {
          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
          return;
        }
        
        handleSecao(props.target.value, conCatResponsavel);
        props.target!.style.border = "";
      }}/>
      <input type="text" id={conCatResponsavel} disabled placeholder="André Borges Lima" />
      <input type="text" id={conCatValor} placeholder="1" onBlur={(props) => {
        if (props.target.value === "") {
          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
          return;
        }
        
        props.target!.style.border = "";
      }}/>
    </Linha>
  );
}

export default RowCcPagantes;