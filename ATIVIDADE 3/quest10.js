//10. Dado o array [10, 20, 30, 40], calcule a soma dos elementos.
let numeros = [10, 20, 30, 40];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma:", soma);