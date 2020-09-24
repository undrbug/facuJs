/*
var num = prompt("ingresa un numero del 1 al 10");
if (num == 10){
    console.log("sobresaliente");
}else{
    if (num==9){
        console.log("notable");
    }else{
        if ((num==8)||(num==7)){
            console.log("bien");
        }else{
            if ((num==6)||(num==5)){
                console.log("suficiente");
            }else{
                if ((num==4)||(num==3)){
                    console.log("insuficiente");
                }else{
                    if ((num==2)||(num==1)){
                        console.log("muy deficiente");
                    }
                }
            }
        }
    }
}
*/

function cadenaAR(cadena) {
    var i = 0;
    var a = ""
    var r = "";
    let nuevaoracion = "";
    while(i < cadena.length) {
        while(cadena[i] ==' '){
            i++
        }
        let a ="";
        if((cadena[i] == 'A') || (cadena [i]  ==  'a' )){
           while (cadena[i] !=' ' && cadena[i] != '.'){
               a += cadena[i]; //armamos la palabra con A
               i++;
            }
            //i++;
            r = a.length; // le asignamos la cantidad de caracteres que tiene la palabra con A al indice r
            if (a[r-1]=="r"){
                nuevaoracion +=  a + " "; //Concatenamos las palabras que terminen en R
                //a+-r;            
            }
        }
        i++
    }
    i++
    return nuevaoracion; //devolvemo la nueva cadena con las palabras con A y R
}
cadenaAR("Para amar y adorar."); //aca llamamos a la funcion cadenAR y le pasamos una cadena de caractares