/*function contarLetrasTE(cadena){
    let indice  = 0;
    let cantidad = 0;
    let contOr = 0;
    let palabra = "";
    while (indice < cadena.length){
        while ((cadena[indice] != ".") && (indice < cadena.length)){
            palabra = cadena[indice] + cadena[indice+1]
            if (palabra == "Te" || palabra == "te"){
                cantidad++;
            }
            indice++;
        }
        if (cantidad > 2){
            contOr++
        }
        cantidad = 0;
        indice++;

    }
    console.log(contOr)
    return(contOr);
} 
 contarLetrasTE("emocionarte con te. Tomarte un tete.")*/

function palabraLargaA(frase){
    var idx=0;
    var longitud=0;
    PrimerLetra=true;
    while (idx < frase.length){
        if  (frase[idx]== "a"){
                while (frase[idx]!= " " && frase[idx]!= "."){
                    longitud++
                    idx++
                }
        }
        if (idx < frase.length){
            idx++;
        }
    }
    console.log(longitud);
}
//var frase=prompt("andar andando por andar"); te la desactivo porque desde el vscode no lo puedo ejecutar.
console.log (palabraLargaA("andar"));
//console.log(longitud)

