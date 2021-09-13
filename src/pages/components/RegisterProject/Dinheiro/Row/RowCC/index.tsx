import React from "react"
import { Linha } from "../../styles";

const RowCcPagantes: React.FC = () => {
  return(
    <Linha>
        <input type="text" value="092765143111" />
        <input type="text" value="André Borges Lima" />
        <input type="text" value="50%" className="alinhar" />
        <input type="text" value="23.500,00" className="alinhar" />
    </Linha>
  );
}

export default RowCcPagantes;