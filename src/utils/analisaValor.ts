export default function analisaValor(recebe: number) {
    var resultado = "", localX = 0, localY = 3, x = 0, valor = recebe.toString();
  
    if(recebe) {
      if(valor.length === 4 || valor.length === 5 || valor.length === 6) {
          if(valor.length === 5) {
              localX = 1;
          } else if(valor.length === 6) {
              localX = 2;
          }
         for(x = 0; x < valor.length; x++) {
             if(x === localX) {
              resultado += valor[x] + ".";
             } else {
              resultado += valor[x];
             }
         }
      } else if(valor.length === 7 || valor.length === 8 || valor.length === 9) {
          if(valor.length === 8) {
              localX = 1;
              localY = 4;
          } else if(valor.length === 9) {
              localX = 2;
              localY = 5;
          }
          for(x = 0; x < valor.length; x++) {
              if(x === localX || x === localY) {
               resultado += valor[x] + ".";
              } else {
               resultado += valor[x];
              }
          }
      }
      resultado += ",00";
      return "R$ " + resultado;
    } else {
        return "R$ 0,00";
    }
}