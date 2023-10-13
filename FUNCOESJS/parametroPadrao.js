//ESTRATÉGIA UM VALOR PADRÃO
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1(), soma1(1,3,2), soma1(0, 0, 0))

//ESTRATÉGIA 2  DE UM VALOR PADRÃO
function soma2(a,b,c){
    a = a !== undefined ? a :
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}
console.log(soma2(), soma2(1,3,2), soma2(0, 0, 0))

//ESTRATÉGIA 3 PADRÃO ES2015

function soma3(a = 1, b = 1, c = 1){

    return a + b + c
}
console.log(soma3(), soma3(1,3,2), soma3(0, 0, 0))

/*
SAIDA DE CODIGO:

3 6 3
3 6 0
3 6 0

*/