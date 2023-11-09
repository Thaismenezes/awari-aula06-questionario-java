/*Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos..*/

const entrada = window.prompt('Digite um número:','6');

let total = ' ';

for(let i=0; i<= entrada; i++) {
    for(let a=0; a<= entrada; a++) {

     total += '*';
    }
    total += '\n ';
}

console.log(total);

