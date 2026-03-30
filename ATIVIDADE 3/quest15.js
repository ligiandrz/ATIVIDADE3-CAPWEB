//Dado um array [1,2,3,4,5], crie outro array com os valores ao quadrado.
let numeros = [1, 2, 3, 4, 5];
let quadrados = [];
for (let i = 0; i < numeros.length; i++) {
    quadrados.push(numeros[i] * numeros[i]);
}
console.log(quadrados);