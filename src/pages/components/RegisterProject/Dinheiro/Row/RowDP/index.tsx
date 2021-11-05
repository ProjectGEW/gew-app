import React from "react"
import { Linha } from "../../styles";

interface INumeroProjetos {
  number: number;
}

interface ILinhasEdicao {
  number: number;
  nomeDespesa: string;
  esforco: number;
  valor: number;
}

const RowDespesas: React.FC<INumeroProjetos> = ({number}) => {

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

export const RowDespesasEdit: React.FC<ILinhasEdicao> = ({number, nomeDespesa, esforco, valor}) => {

  const conCatDespesa = `despesaE${number}`;
  const conCatEsforco = `esforcoE${number}`;
  const conCatValor = `valorE${number}`;
  
  return (
    <Linha id={`DE${number}`}>
      <input type="text" id={conCatDespesa} defaultValue={nomeDespesa} onBlur={(props) => {
        if (props.target.value === "") {
         props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
         return;
        }

        props.target!.style.border = "";
      }}/>
      <input type="number" id={conCatEsforco} defaultValue={esforco} onBlur={(props) => { 
        if (props.target.value === "") {
          props.target.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
          return;
        }
 
        props.target!.style.border = "";
      }}/>
      <input type="number" id={conCatValor} defaultValue={valor} onBlur={(props) => {
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