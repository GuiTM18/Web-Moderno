function falar(frase){
    return new Promise((resolve, reject) => {
        resolve(frase)
     //   reject(frase)
    })
}

falar('Oi pessoal')
    .then(frase => frase.concat(', tudo bem?'))
    .then(frase2 => console.log(frase2))
    .catch(err => console.error(err)) // o catch tratra o reject

// -------------------------------------------------------------------

let p = new Promise((resolve) => {
    return resolve(5)
})

p.then( valor => console.log(valor))

// -------------------------------------------------------------------

function gerarValor(min, max){
    if ( min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarValor(1, 9)
    .then(num => num * 10)
    .then(console.log)



