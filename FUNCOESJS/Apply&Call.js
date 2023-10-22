function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    item: "Notebook",
    preco: 4589,
    desc: 0.15

}

console.log(getPreco()) //R$ NaN

//PARA CHAMAR O OBJ JUNTO DA FUNCTION É NECESSARIO USAR O CALL OU APPLY:

console.log(getPreco.call(produto)) // R$ 3900.65

const carro = {
    marca: "Uno",
    preco: 40000,
    desc: 0.20
}

console.log(getPreco.apply(carro)) // R$ 32000

// AMBOS SÃO PRATICAMENTE A MESMA COISA A UNICA DIFERENCA É NA HORA DE COLOCAR NOVOS VALORES NAS VARIAVEIS:

console.log(getPreco.call(carro, 2, '$')) // CALL $ 96000
console.log(getPreco.apply(carro, [2, '$'])) // APPLY $ 96000 (A DIFERENÇA É USO DE COCHETES PARA ATRIBUIR OS VALORES) 