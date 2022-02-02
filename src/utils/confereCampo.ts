import { errorfulNotify } from '../hooks/SystemToasts'

export function vrfCampoComMsg(conteudo: string, idCampo: string, idCampoDeResposta: string){
  if (conteudo !== "") {
    document.getElementById(idCampo)!.style.border = "";
    document.getElementById(idCampoDeResposta)!.innerHTML = "";

    return 1;
  }

  document.getElementById(idCampo)!.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
  document.getElementById(idCampoDeResposta)!.innerHTML = "*O campo não pode estar vazio!";
  return -1;
};

export function vrfCampo(conteudo: string, idCampo: string) {
  if (conteudo === "") {
    document.getElementById(idCampo)!.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";

    return 1;
  }

  document.getElementById(idCampo)!.style.border = "";
  return 0;
}

export function verificaCadConsultor() {
  const ids = ["nome", "cpf", "telefone", "numero_cracha", "valor_hora", "email", "senha"];
  let erro;

  for (let i = 0; i < ids.length; i ++) {
    let valorCampo = (document.getElementById(ids[i]) as HTMLInputElement).value;

    vrfCampo(valorCampo, ids[i]) === 1 ? erro = 1 : erro = 0;
  }

  verificaFornecedor() === 1 ? erro = 1 : erro = 0;

  return erro;
}

export function verificaFornecedor() {
  const conteudo = (document.getElementById("nome_fornecedor") as HTMLSelectElement).value;

  if (conteudo === "Todos") {
    document.getElementById("nome_fornecedor")!.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";

    return 1;
  }

  document.getElementById("nome_fornecedor")!.style.border = "";
  return 0;
}

export function analisaCampoLinhasdDespesas(listaDespesa: number) {
  let confirm = 0;
  for (let i = 1; i <= listaDespesa; i++) {
    confirm += analisaCampo(`despesa${i}`);
    confirm += analisaCampo(`esforco${i}`);
    confirm += analisaCampo(`valor${i}`);
  }
  if (confirm < listaDespesa * 3) {
    return 0; 
  }
  return 1;
}

export function analisaCampoLinhasdCcPagantes(listaCcPagantes: number) {
  let confirm = 0;

  for (let i = 1; i <= listaCcPagantes; i++) {
    confirm += analisaCampo(`responsavel${i}`);  
    confirm += analisaCampo(`valorC${i}`);
  }

  if (confirm < listaCcPagantes * 2) {
    return 0; 
  }
  
  return 1;
}

function analisaCampo(idElement: string) {
  if ((document.getElementById(idElement) as HTMLInputElement).value === "") {
    document.getElementById(idElement)!.style.border = "0.25vh solid rgb(255, 0, 0, 0.8)";
    return 0;
  }
  
  document.getElementById(idElement)!.style.border = "";
  return 1;
}

const idCampos = [
  'numeroProjeto',
  'ataNome',
  'titulo',
  'descricao',
  'nome_responsavel',
  'nome_solicitante',
  'data_de_inicio',
  'data_de_termino',
  'data_de_aprovacao'
];
const numeroDeCampos = 11;
export function validacaoDosCamposCadastros(lengthDespesas: number, lengthCentroDeCustos: number, fechar?: Function) {
  let totalValidacao = 0;

  idCampos.forEach(element => {
    if((document.getElementById(element) as HTMLInputElement).value !== "") {
      totalValidacao += 1;
    }

    totalValidacao += 0;
  });

  totalValidacao += analisaCampoLinhasdDespesas(lengthDespesas);
  totalValidacao += analisaCampoLinhasdCcPagantes(lengthCentroDeCustos);

  if(totalValidacao !== numeroDeCampos) {
    if(fechar) {
      fechar();
    } 

    errorfulNotify('Todos os campos precisam estar prenchidos!'); 
    return false;
  }

  return true;
}