/*
Junior tem 25 anos, pesa 85 kg tem 1,75 de altura e seu imc é de ...
*/

const nome = "Junior Rosa";
const idade = 26;
const peso = 85;
const altura = 1.75;
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2024 - idade
console.log(nome, `tem ${idade} anos, pesa`,peso,"kg tem",altura,"de altura e seu imc é de", imc,"\n Nasceu no ano de", anoNascimento)