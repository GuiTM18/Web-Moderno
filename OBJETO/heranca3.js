const pai = {
    nome: 'Pedro', 
    CorCabelo: 'Preto'
}

const filha = Object.create(pai)
filha.nome = 'GIselly'
console.log(filha)
console.log(filha.CorCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Leila', writable: false, enumerable: false}
})

console.log(filha2.nome)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let varra in filha){
    filha.hasOwnProperty(varra) ? console.log(filha[varra]) : console.log("Valor veio de uma herança: " + [varra])
}