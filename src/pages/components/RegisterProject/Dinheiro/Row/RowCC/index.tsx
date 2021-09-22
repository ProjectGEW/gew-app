import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowCcPagantes: React.FC<Iteste> = ({number}) => {

  const conCatCentroDeCusto = `centro${number}`;
  const conCatValor = `valorC${number}`;

  return (
    <Linha id={`C${number}`}>
      <input type="text" id={conCatCentroDeCusto} defaultValue="092765143" />
      <input type="text" defaultValue="André Borges Lima" />
      <input type="text" id={conCatValor} defaultValue="1" className="alinhar" />
    </Linha>
  );
}

export default RowCcPagantes;