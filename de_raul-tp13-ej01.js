/*var vector = [2,8,0,7,6,-200,1,0,-10,0,0,8,6,7,1,15]
//vector.push(2,8,0,7,6,-200,1,0,-10,0,0,8,6,7,1,15) esto le sacaria. 
function Contar0(){
var Posiciones = ' ';
for (Indice = 0;Indice < 16; Indice++){
    if (vector[Indice] == 0){
       Posiciones = Posiciones + Indice + ' '
    }
  }
  console.log('Las posiciones de los 0 son',Posiciones)
}
Contar0();

function PosicionesImpares(){
var ParImpar = 0;
var Numeros = ' ';
var Posiciones = ' ';
for (Indice = 0;Indice < 16; Indice++){
ParImpar = (-1) ** Indice
    if (ParImpar == -1){
       Posiciones = Posiciones + Indice + ' '
       Numeros = Numeros + vector[Indice] + ' '
    }
  }
  console.log('Los numeros almacenados en posiciones impares son',Numeros)
}

PosicionesImpares();
function ValorNegativo(){
var NumeroNegativo = 0;
var Bandera = 0;
for (Indice = 0;Indice < 16; Indice++){
   if(Bandera == 0 && vector[Indice] < 0){
      NumeroNegativo += Indice    
      Bandera = 1
    }
  }
  console.log('La posicion del primer elemento negativo es',NumeroNegativo,'y el numero cargado es',vector[NumeroNegativo])
}
ValorNegativo();

function ValorN (NumeroN){
var Valor = 0;
var ContadorN = 0;
for (Indice = 0;Indice < 16; Indice++){ 
   if(vector[Indice] == NumeroN){
      ContadorN = ContadorN + 1
    }
  }
  console.log('En numero ingresado',NumeroN,'aparece',ContadorN,'veces.')
}
ValorN(8)*/

function MultiplosN(CantidadMultiplos,ValorN){
  var vector = [];
  var Producto = 0;
  for (Indice = 1;Indice <= CantidadMultiplos;Indice++){
     Producto = ValorN * Indice
     vector[Indice] = Producto
     Cadena = Cadena + vector[Indice] + ' '
     }
  }
  CantidadMultiplos = prompt('Ingrese la cantidad de multiplos');
  ValorN = prompt('Ingrese el numero');
  var Cadena = ' ';
  MultiplosN(CantidadMultiplos,ValorN);
  console.log('--->',Cadena,'<----');





   




