import React from "react"
import { Linha } from "../../styles";
interface Iteste {
  number: number;
}

const RowDespesas: React.FC<Iteste> = ({number}) => {

  const conCatDespesa = `despesa${number}`;
  const conCatEsforco = `esforco${number}`;
  const conCatValor = `valor${number}`;
  
  return (
    <Linha id={`D${number}`}>
      <input type="text" id={conCatDespesa} placeholder="Java" onBlur={(props) => {
        if (props.target.value === "") {
         props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
         return;
        }

        props.target!.style.border = "";
      }}/>
      <input type="number" id={conCatEsforco} placeholder="100" onBlur={(props) => { 
        if (props.target.value === "") {
          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
          return;
        }
 
        props.target!.style.border = "";
      }}/>
      <input type="number" id={conCatValor} placeholder="20.000,00" onBlur={(props) => {
        if (props.target.value === "") {
          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
          return;
        }
  
        props.target!.style.border = "";
      }}/>
    </Linha>
  );
}

export default RowDespesas;