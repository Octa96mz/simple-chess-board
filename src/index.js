
function crearTableroAjedrez(numero) {
    var tablero = '';
    var esRojo = true;
  
    for (var fila = 0; fila < numero; fila++) {
      for (var columna = 0; columna < numero; columna++) {
        if (esRojo) {
          tablero += 'rojo ';
        } else {
          tablero += 'azul ';
        }
        esRojo = !esRojo;
      }
      tablero += '\n';
      if (numero % 2 === 0) {
        esRojo = !esRojo; // Cambiar de color para cada fila en tableros de tamaño par
      }
    }
  
    return tablero;
    
  }

  
  
  module.exports ={
    crearTableroAjedrez
  };