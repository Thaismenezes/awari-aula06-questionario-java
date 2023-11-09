/*Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.*/

const entrada = window.prompt('Digite as idades separadas por virgula:');
const idades = entrada.split(',');
console.log(idades)


let total = 0;
for(let i=0; i<idades.length; i++) {
    total += parseInt(idades[i]);
}

const media = total / idades.length;
console.log(media);

