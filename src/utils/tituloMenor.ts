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