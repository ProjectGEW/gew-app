import React from "react"
import { Linha } from "../../styles";

interface Iteste {
  number: number;
}

const RowCcPagantes: React.FC<Iteste> = (number) => {
  return (
    <Linha>
      <input type="text" defaultValue="092765143111" />
      <input type="text" defaultValue="André Borges Lima" />
      <input type="text" defaultValue="50%" className="alinhar" />
      <input type="text" defaultValue="23.500,00" className="alinhar" />
    </Linha>
  );
}

export default RowCcPagantes;