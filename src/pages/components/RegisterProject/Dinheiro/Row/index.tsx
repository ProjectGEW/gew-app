import React from "react"
import { Linha } from "../styles";

const RowDinheiro: React.FC = () => {
  return(
    <Linha>
        <input type="text" value="092765143111" />
        <input type="text" value="100" />
        <input type="text" value="20,000.00" className="alinhar" />
    </Linha>
  );
}

export default RowDinheiro;