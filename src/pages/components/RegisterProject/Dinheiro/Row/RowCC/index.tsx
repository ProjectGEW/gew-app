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
          width: 12vw;
          margin-left: 0vw;
      }

      &:nth-child(2) {
          width: 16vw;
          margin-left: 0vw;
      }

      &:nth-child(3) {
          width: 6vw;
          margin-right: 0vw;
      }

      &:nth-child(4) {
          width: 10vw;
          margin-right: 0vw;
      }
                
  }
`;

const RowCcPagantes: React.FC<Iteste> = (number) => {

  const conCatCentroDeCusto = `centro${number.number}`;
  const conCatValor = `valorC${number.number}`;

  return (
    <Linha id={`C${number.number}`}>
      <input type="text" id={conCatCentroDeCusto} defaultValue="092765143" />
      <input type="text" defaultValue="André Borges Lima" />
      <input type="text" defaultValue="50%" className="alinhar" />
      <input type="text" id={conCatValor} defaultValue="23.500,00" className="alinhar" />
    </Linha>
  );
}

export default RowCcPagantes;