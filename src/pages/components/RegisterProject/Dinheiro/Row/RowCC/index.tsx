import React from "react"
import styled from "styled-components";
import api from "../../../../../../service/api";

interface ISecaoResponse {
  nome: string;
}

interface Iteste {
  number: number;
}

const Linha = styled.div`
  display: block;
  width: 100%;
  transition: all 0.2s;

  /* Estilização dos erros */

  .msgErro {
    position: absolute;
    font-size: 1.9vh;
  }

  .one {
    margin-top: 5.2vh;
    margin-left: 0vw;
  }

  .two {
    margin-top: 5.2vh;
    margin-left: 38.5vw;
  }

  /* Fim */

  input {
      display: block;
      height: 5vh;

      border-radius: 0.4vh;
      border: 0px;
      padding: 1vh;

      background-color: rgb(181, 181, 181, 0.6);
      box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
      color: #5E5E5E;

      &:nth-child(1) {
          width: 10vw;
          margin-left: 0vw;
      }

      &:nth-child(3) {
          width: 16vw;
          margin-left: 0vw;
      }

      &:nth-child(4) {
          width: 8vw;
          margin-right: 0vw;
      }                
  }
`;

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