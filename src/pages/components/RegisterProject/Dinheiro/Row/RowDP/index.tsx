import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowDespesas: React.FC<Iteste> = (number) => {

  const conCatDespesa = `despesa${number.number}`;
  const conCatEsforco = `esforco${number.number}`;
  const conCatValor = `valor${number.number}`;

  return (
    <Linha id={`D${number.number}`}>
      <input type="text" id={conCatDespesa} placeholder="Java" />
      <input type="text" id={conCatEsforco} placeholder="100" className="alinhar" />
      <input type="text" id={conCatValor} placeholder="20.000,00" className="alinhar" />
    </Linha>
  );
}

export default RowDespesas;