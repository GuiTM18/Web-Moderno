//FUNCAO FABRICA, OU SEJA FUNCOES QUE ARMAZENAM UM OBJETO E PODE SER ALTERADA DE FORMA MENOS REPETITIVA

function criarPessoa(){
    return{
        nome: 'Guilherme',
        idade: 20
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Iphone XR", 2229.99))
console.log(criarProduto("Iphone 11", 2599.99))
console.log(criarProduto("Iphone 12", 2900.99))

/*
SAIDA DE CODIGO:

{ nome: 'Guilherme', idade: 20 }
{ nome: 'Iphone XR', preco: 2229.99, desconto: 0.1 }
{ nome: 'Iphone 11', preco: 2599.99, desconto: 0.1 }
{ nome: 'Iphone 12', preco: 2900.99, desconto: 0.1 }

*/