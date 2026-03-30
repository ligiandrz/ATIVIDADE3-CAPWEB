//Crie um objeto com um método que retorne uma frase com os dados da pessoa.
let pessoa = {
    nome: "Ligia",
    idade: 19,
    cidade: "Maceió",
    apresentar: function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
}
};
console.log(pessoa.apresentar());