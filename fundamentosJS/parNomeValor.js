const saudacao = 'ola' // conceito lexico

function exec(){
    const saudacao = 'falaa' // conceito lexico 2
    return saudacao
}

const cliente = {
    nome: 'Guilherme',
    idade: 20,
    peso: 70,
    endereco: {
        rua: 'Antonio Torquato',
        cep: '1150000'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

let a = 2
let b = 5


console.log(a + b);
//        ||
a += b
console.log(a)

/*
SAIDA DE CODIGO:

ola

falaa

{
  nome: 'Guilherme',
  idade: 20,
  peso: 70,
  endereco: { rua: 'Antonio Torquato', cep: '1150000' }
}

7
7

*/