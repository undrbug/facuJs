/*function pesoTodolar(pesos,dolar){
    retur (pesos / dolar);
}

console.log(pesoTodolar(10000, 105.33));*/


var frase = "La vainilla varias veces viene en vaina, esta es de valeria.";
var i = 0;
var cantidad = 0;
var masTres = 0;
while (i < frase.length){ //controla que no se termine la cadena o que no se caiga como con carlitos.
       cantidad = 0; //vuelvo a poner a 0 el contador de cantidad
    while ((frase[i] != " ") && (i < frase.length)){  //controlo que no termine la palabra ni la cadena
           i++;  //incremento el contador para recorrer la palabra      
           cantidad++; //cuento las letras
        }
       if (cantidad > 3){ //controlo si tengo mas de tres letras
           masTres++;     // si es verdadero cuento una palabra mas que cumple con la premisa
       } 
       //if (i < frase.length){
           i++ //aca yo usaria otro if para controlar que no se caiga...
       //}
}
console.log(masTres) 


/*
var frase = "La vainilla varias veces viene en vaina, esta es de valeria.";
var i = 0;
var cantidad = 0;
var masTres = 0;
while (frase[i] != "."){
       while (frase[i] == "."){i++;}
       while (frase[i] != "." && frase[i] != ".") {i++;}
       cantidad++;
       if (cantidad > 3){
           masTres++;
       } 
}
console.log(masTres) */
