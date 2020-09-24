alert("¡Hola Mundo!");

//para no borrar

/*Hacer una función que permita contar la cantidad de palabras de una cadena
de caracteres, terminada en punto, y devolver la longitud de la palabra más
larga que comienza con 'a'.*/
//let cadena = "Antes.";
let mayCant = 0;
let contPal = 0;
let palabralarga = ""
contador = 0;
function ContLongA(cadena){
    let i = 0;
    let contLet = "";
    while (i < cadena.length){
        let palconA = "";

    if (((i == 0) && (cadena[i] == "a" || cadena[i] == "A")) || ((cadena[i] == "a" || cadena[i] == "A") && (cadena[i-1] == " "))) {
            let palconA = "";
            while ((cadena[i] != " ") && (cadena[i] != ".")){
                palconA = palconA + cadena[i];
                i++;
                contador++
            }
            console.log(palconA,contador);
            contlet = palconA.length;
            //console.log(contlet);
            if (contlet > mayCant){
                palabralarga = "";
                mayCant = contlet;
                palabralarga += palconA
            }
        }else{   
            if ((cadena[i] == " ") || (cadena[i] == ".")){
                contPal++
                i++
            }
        }
        i++
    }
    //console.log(contPal,mayCant,palabralarga);
}
ContLongA("El armar en tiempo de colera.");
//console.log();
//console.log(palabralarga);


its works 
    if (((i == 0) && (cadena[i] == "a" || cadena[i] == "A")) || ((cadena[i] == "a" || cadena[i] == "A") && (cadena[i-1] == " "))) {


