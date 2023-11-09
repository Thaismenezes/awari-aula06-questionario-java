/*Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.*/

const entrada = window.prompt('Digite as 10 idades separadas por virgula:');
const idades = entrada.split(',');
console.log(idades)


let controle = 0;

for(let i=0; i<idades.length; i++) {
    const maiores = parseInt(idades[i]);
    if(maiores >= 18){
        controle ++;
    }
}

console.log('Maiores idades:', controle);




    

        
