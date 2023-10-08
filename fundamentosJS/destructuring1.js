const pessoa = {
    nome: 'Guilherme',
    idade: 20,
    endereco: {
        cidade: 'Ibirapitanga',
        bairro: 'Itamarati'
    } 

}

// vai tira do objeto e e imprimir na tela:

const {nome, idade} = pessoa 
console.log(nome, idade)

const {nome: g, idade: i} = pessoa
console.log(g, i)

const { endereco: { cidade, bairro, cep}} = pessoa
console.log(cidade, bairro, cep)

/*
SAIDA DE CODIGO:

Guilherme 20
Guilherme 20
Ibirapitanga Itamarati undefined

*/
