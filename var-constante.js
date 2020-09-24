function concatenar(cadena){
    let indice = 0;
    let palabra = ""
    while (indice < cadena.length){
        palabra = "";
        while ((cadena[indice] != " ") && (cadena[indice] != ".")){
            palabra = palabra + cadena[indice];
            console.log(palabra)
            indice++
        }
        return
    }
}
concatenar("pedro.");