// IEEE 754-2008

let num1 = 10.252;
let num2 = 2.5;

console.log(num1.toString() + num2); //concat
console.log(num1.toString(2)); //binario 1010.0100000010000011000100100110111010010111100011011
console.log(num1.toFixed(2)); //.2f tambem serve para corrigir imprecisoes com numeros de ponto flutuante
console.log(Number.isInteger(num1)); //false
let temp = num1 * 'ola' ;
console.log(Number.isNaN(temp)); // true