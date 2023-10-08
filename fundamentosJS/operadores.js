const [a, b, c, d] = [ 3, 5, 1, 12]

const soma = a + b + c + d
const subtracao = a - b
const multiplicacao = b * c
const divisao = d/ a
const restoDiv = a % d

console.log(soma, subtracao, multiplicacao, -divisao, restoDiv)

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Ternário

console.log(resultado(7.5))

/*
SAIDA DE CODIGO:

21 -2 5 -4 3

Aprovado

*/