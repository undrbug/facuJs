function esPalindromo(frase){
    var espacio = " ";
    var sinespacio = "";
    var idx=0;
    var acumulador='';
    var EsoNo = Boolean
    var largo=frase.length;
        largo=largo-1
        idx=largo;
        while (idx >="0" ){
          acumulador+=frase[largo];
          idx--;
          largo--;
        }
    acumulador=acumulador.replace(espacio,sinespacio);
    acumulador=acumulador.toLowerCase();
    console.log (acumulador);
    frase=frase.toLowerCase();
    frase=frase.replace(" ",'');
    if (frase===acumulador){
      EsoNo=true;
    }
    else {
      EsoNo=false;
    return EsoNo; 
    }
}
    var frase="Anita la patinadora";
    console.log(esPalindromo(frase));
    