

const entrada = window.prompt('Digite um número:','6');

let total = ' ';

for(let i=0; i<= entrada; i++) {
    for(let a=0; a<= i; a++) {

     total += '*';
    }
    total += '\n ';
}

console.log(total);
