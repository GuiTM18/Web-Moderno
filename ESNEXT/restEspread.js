//operador rest vai pegar os valores e juntar tudo que foi atribuido
//operador spread vai espalhar os valores 

function num(...numeros){ //REST
    num = 0
    numeros.forEach(n => num += n)
    return num
}

console.log(num(2, 5, 3)) //SPREAD

const grupoA = ['Flamengo', 'Palmeiras', 'Botafogo']
const grupob = ['Fluminense', ...grupoA, 'Vasco']

console.log(grupob)