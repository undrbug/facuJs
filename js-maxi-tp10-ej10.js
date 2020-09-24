let cadena = "Mirando a la nada pensando en que puedo";
let nuevaOracion = "";
let resultado = "";
let i = 0;
let i2 = 0;
let usuarioini = "p"; //prompt("ingrese el caracter de inicio");
let usuariofin = "o"; //prompt("ingrese el caracter de finalizacion");
while (i < cadena.length){
    while ((cadena[i] != " ") && (i < cadena.length)){
        resultado = "";
        if (((i == 0) || (cadena[i-1] == " ")) && (cadena[i] == usuarioini)){
            while ((cadena[i] != " ") && (i < cadena.length)){
                resultado += cadena[i];
                i++;
            }
            i2 = resultado.length;
            i2--
            if (resultado[i2] == usuariofin){
                nuevaOracion += resultado + " ";
            }
        }
        i++;
    }
    i++;
}

console.log(`el caracter de inicio es ${usuarioini} y el de final es ${usuariofin}`);
console.log("la nueva cadena es; "+ nuevaOracion);
