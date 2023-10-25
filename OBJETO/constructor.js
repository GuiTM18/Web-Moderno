function Pessoa(nome, idade, peso, altura){
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;

}


const pessoa1 = new Pessoa('Savio', 20, 70, 1.79);
const pessoa2 = new Pessoa('Julia', 22, 63, 1.69);
const pessoa3 = new Pessoa('Wilck', 24, 90, 1.83);
const pessoa4 = new Pessoa('Stefane', 21, 60, 1.70);
const pessoa5 = new Pessoa('PH', 22, 73, 1.50);

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)

