const notas = [4, 6.8, 8, 9, 3.5, 7.8]

//SEM CALLBACK

let notasBaixas = []

for(let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//COM CALLBAK

let notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

console.log(notasBaixas2)

//CALLBACK COM ARROWFUNCTION

const notasBaixas3 = notas.filter( notas => notas < 7)
console.log(notasBaixas3)