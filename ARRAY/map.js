let numeros = [1, 2, 3, 4, 5, 6]

let resultado = numeros.map(function(e){ // Mapeia os elementos da array cria um novo array 
    return e * 2
})

console.log(resultado)

let triplo = numeros.map(elemento => elemento * 3)
console.log(triplo)

let soma = e => e + 10
let dobro = e => e * 2
let converter = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numeros.map(soma).map(dobro).map(converter)
console.log(result)