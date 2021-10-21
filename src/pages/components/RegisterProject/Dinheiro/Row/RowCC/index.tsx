import React from "react"
import styled from "styled-components";
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

  const conCatResponsavel = `responsavel${number}`

  const conCatccPagantesResponse = `ccPagantesResponse${number}`;
  const conCatccValorResponse = `ccValorResponse${number}`;
  
  return (
    <Linha id={`C${number}`}>
      <input type="text" id={conCatCentroDeCusto} placeholder="092765143" onBlur={(props) => handleSecao(
        props.target.value, conCatResponsavel
      )}/>
      <p id={conCatccPagantesResponse} className="one msgErro"/>
      <input type="text" id={conCatResponsavel} placeholder="André Borges Lima" />
      <input type="text" id={conCatValor} placeholder="1" className="alinhar" />
      <p id={conCatccValorResponse} className="two msgErro"/>
    </Linha>
  );
}

export default RowCcPagantes;