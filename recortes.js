//TP 7 – INTRODUCCIÓN A JS
//Ej1
    console.log('¡hola mundo!');
//Ej2
    let usrname = prompt('ingrese su nombre');
    console.log("Bienvenido:"+usrname);
//Ej3
    let numEnt = parseInt(prompt('ingrese un numero entero'));
    console.log("El numero entero es:"+ numEnt);
{Ej4}
    let nom = prompt('ingrese su nombre');
    let ape = prompt('ingrese su apellido');
    console.log(nom + " " + ape)
//Ej5
    let num1 = parseInt(prompt('ingrese el primer número'));
    let num2 = parseInt(prompt('ingrese el segundo número'));
    if (num1 == num2) {
        console.log("los numeros son iguales");
    }else{
        console.log("los numeros son distintos");
    }
//DESAFIO_1
    let num1 = prompt('ingrese el primer número');
    let num2 = prompt('ingrese el segundo número');
    let sum = parseInt(num1)+ parseInt(num2);
    console.log("los numeros son: " + sum);
//DESAFIO_2
    let num1 = prompt('ingrese el primer número');
    let num2 = prompt('ingrese el segundo número');
    let prom = (parseFloat(num1) + parseFloat(num2))/2;
    console.log("El promedio es: "+prom);