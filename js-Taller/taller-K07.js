// Escribe una función que reciba una cadena de texto
// como parámetro y devuelva la palabra más larga encontrada en
// la cadena. 



let palabras = ['mucho', 'muchomucho', 'muchomuchomucho', 'muchomuchomuchomuchoa'];
    let totales  = [];

    for(let palabra of palabras) {
      totales.push(palabra.length);
    }
    
    let maximo = Math.max.apply(null, totales);
    
    for (let elemento of palabras) {
        
      if (elemento.length === maximo) {
        console.log(elemento);
      }
    }