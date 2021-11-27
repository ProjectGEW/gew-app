/* Função criada com o objetivo de definir a quantidade de caracteres do título que vai aparecer na tela
  Exemplo: titulo = "ABC - Implantação de Sistemas de Informação" -> retornaTituloMenor(titulo, 18) = "ABC - Implantação ..." */

export default function retornaTituloMenor(titulo: string, tamanho: number, tipo?: string) {
  let montaTitulo = "";
  for(var x = 0; x < tamanho; x++) {
    montaTitulo += titulo[x];
  }

  if(tipo === 'pdf') {
    return montaTitulo;
  }

  return montaTitulo + "...";
}