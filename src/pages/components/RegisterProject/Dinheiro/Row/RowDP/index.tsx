import React from "react"
import { Linha } from "../../styles";

const RowDespesas: React.FC = () => {
  return(
    <Linha>
        <input type="text" placeholder="Java"/>
        <input type="text" placeholder="100"/>
        <input type="text" placeholder="20.000,00" className="alinhar" />
    </Linha>
  );
}

export default RowDespesas;