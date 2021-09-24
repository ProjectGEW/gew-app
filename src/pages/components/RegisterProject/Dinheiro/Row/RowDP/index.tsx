import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowDespesas: React.FC<Iteste> = ({number}) => {

  const conCatDespesa = `despesa${number}`;
  const conCatEsforco = `esforco${number}`;
  const conCatValor = `valor${number}`;

  const conCatDespesaResponse = `despesaResponse${number}`;
  const conCatEsforcoResponse = `esforcoResponse${number}`; 
  const conCatValorResponse = `valorResponse${number}`;
  
  return (
    <Linha id={`D${number}`}>
      <input type="text" id={conCatDespesa} placeholder="Java" />
      <p id={conCatDespesaResponse}></p>
      <input type="text" id={conCatEsforco} placeholder="100" className="alinhar" />
      <p id={conCatEsforcoResponse}></p>
      <input type="text" id={conCatValor} placeholder="20.000,00" className="alinhar" />
      <p id={conCatValorResponse}></p>
    </Linha>
  );
}

export default RowDespesas;