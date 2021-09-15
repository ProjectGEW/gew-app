import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowCcPagantes: React.FC<Iteste> = (number) => {

  const conCatCentroDeCusto = `centro${number.number}`;
  const conCatValor = `valorC${number.number}`;


  return (
    <Linha>
      <input type="text" id={conCatCentroDeCusto} defaultValue="092765143" />
      <input type="text" defaultValue="André Borges Lima" />
      <input type="text" defaultValue="50%" className="alinhar" />
      <input type="text" id={conCatValor} defaultValue="23.500,00" className="alinhar" />
    </Linha>
  );
}

export default RowCcPagantes;