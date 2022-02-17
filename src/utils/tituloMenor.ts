/* Função criada com o objetivo de definir a quantidade de caracteres do título que vai aparecer na tela
  Exemplo: titulo = "ABC - Implantação de Sistemas de Informação" -> retornaTituloMenor(titulo, 18) = "ABC - Implantação ..." */

export default function retornaTituloMenor(titulo: string, tamanho: number, tipo?: string) {
  let montaTitulo = "";

  if(titulo.length > tamanho) {
    for(var x = 0; x < tamanho; x++) {
      montaTitulo += titulo[x];
    }
  } else {
    for(var x = 0; x < titulo.length; x++) {
      montaTitulo += titulo[x];
    }
    return montaTitulo;
  }

  if(tipo === 'pdf') {
    return montaTitulo;
  }

  return montaTitulo + "...";
}