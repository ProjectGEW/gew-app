import React from "react"
import styled from "styled-components";

interface Iteste {
  number: number;
}

const Linha = styled.div`
  display: block;
  width: 100%;
  transition: all 0.2s;

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

      &:nth-child(2) {
          width: 16vw;
          margin-left: 0vw;
      }

      &:nth-child(3) {
          width: 8vw;
          margin-right: 0vw;
      }                
  }
`;

const RowCcPagantes: React.FC<Iteste> = ({number}) => {

  const conCatCentroDeCusto = `centro${number}`;
  const conCatValor = `valorC${number}`;

  const conCatccPagantesResponse = `ccPagantesResponse${number}`;
  const conCatccValorResponse = `ccValorResponse${number}`;
  
  return (
    <Linha id={`C${number}`}>
      <input type="text" id={conCatCentroDeCusto} defaultValue="092765143" />
      <p id={conCatccPagantesResponse}></p>
      <input type="text" defaultValue="André Borges Lima" />
      <input type="text" id={conCatValor} defaultValue="1" className="alinhar" />
      <p id={conCatccValorResponse}></p>
    </Linha>
  );
}

export default RowCcPagantes;