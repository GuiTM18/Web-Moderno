function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

console.log(rand({max: 100, min: 0}))
// OU

const obj = {max: 100, min: 0}
console.log(rand(obj))


/*
SAIDA DE CODIGO:

valores aleatórios

*/