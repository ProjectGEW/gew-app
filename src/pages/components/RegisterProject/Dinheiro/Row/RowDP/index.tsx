import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowDespesas: React.FC<Iteste> = (number) => {
  return (
    <Linha>
      <input type="text" id="despesa1" placeholder="Java" />
      <input type="text" id="esforco1" placeholder="100" />
      <input type="text" id="valor1" placeholder="20.000,00" className="alinhar" />
    </Linha>
  );
}

export default RowDespesas;