export default function analisaCampo(idElement: string, textResponse: string, idElementResponse: string) {
  if ((document.getElementById(idElement) as HTMLInputElement).value === "") {
    document.getElementById(idElement)!.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
    document.getElementById(idElementResponse)!.innerHTML = textResponse;
    return 0;
  }
  document.getElementById(idElement)!.style.border = "";
  document.getElementById(idElementResponse)!.innerHTML = "";
  return 1;
}

export function analisaCampoLinhasdDespesas(listaDespesa: number) {
  let confirm = 0;
  for (let i = 1; i <= listaDespesa; i++) {
    /*confirm += analisaCampo(`despesa${i}`, "Por favor insira a Despesa", `despesaResponse${i}`);
    confirm += analisaCampo(`esforco${i}`, "Por favor insira o Esforço", `esforcoResponse${i}`);
    confirm += analisaCampo(`valor${i}`, "Por favor insira o Valor", `valorResponse${i}`);*/
    confirm += analisaCampo(`despesa${i}`, "Insira a Despesa", `despesaResponse${i}`);
    confirm += analisaCampo(`esforco${i}`, "Insira o Esforço", `esforcoResponse${i}`);
    confirm += analisaCampo(`valor${i}`, "Insira o Valor", `valorResponse${i}`);
  }
  if (confirm < listaDespesa * 3) {
    return 0; 
  }
  return 1;
}

export function analisaCampoLinhasdCcPagantes(listaCcPagantes: number) {
  let confirm = 0;
  for (let i = 1; i <= listaCcPagantes; i++) {
    /*confirm += analisaCampo(`centro${i}`, "Por favor insira a CcPagante", `ccPagantesResponse${i}`);
    confirm += analisaCampo(`valorC${i}`, "Por favor insira o Valor", `ccValorResponse${i}`);*/
    confirm += analisaCampo(`centro${i}`, "Insira a CcPagante", `ccPagantesResponse${i}`);
    confirm += analisaCampo(`valorC${i}`, "Insira o Valor", `ccValorResponse${i}`);
  }
  if (confirm < listaCcPagantes * 2) {
    return 0; 
  }
  return 1;
}