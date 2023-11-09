const num = window.prompt('Digite um número:' ,'10')

const par = [];
const impar = [];

for(let i=1; i <=num; i++){
	if (i % 2 === 0) {
		par.push(i);
	} else{
		impar.push(i);
	}
}

console.log('Números pares:', par);
console.log('Números impares:', impar);
	

		
