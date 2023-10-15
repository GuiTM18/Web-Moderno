const soma = function (a, b) {
    return a + b
}

const imprimirSoma = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirSoma(3, 4)
imprimirSoma(3, 4, soma)
imprimirSoma(5, 6, function (a, b){
    return a - b
})
imprimirSoma(3, 4, (a, b) => a * b)