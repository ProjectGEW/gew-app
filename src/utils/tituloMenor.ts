export default function retornaTituloMenor(titulo: string, tamanho: number) {
  let montaTitulo = "";
  for(var x = 0; x < tamanho; x++) {
      montaTitulo += titulo[x];
  }
  return montaTitulo + "...";
}