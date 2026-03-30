//Percorra esse array de objetos e exiba o nome de cada pessoa.
let pessoas = [
    { nome: "ligia", idade: 19, cidade: "Maceió" },
    { nome: "duda", idade: 19, cidade: "Recife" },
    { nome: "laura", idade: 19, cidade: "Salvador" }
];
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome);
}