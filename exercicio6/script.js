
const num = window.prompt('Digite um número inteiro:', '10');
console.log(`Tabuada do ${num}`)		
for(let i=1; i<= 10; i++){
	const resultado = num * i;
	console.log(`${num} x ${i} = ${resultado}`)
}