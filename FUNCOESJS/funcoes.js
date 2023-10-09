/* ---TIPOS DE FUNCÇÕES EM JAVASCRIPT ----*/


//FUNÇÃO SEM PARÂMETRO:

let valor = 20

function incrementa(){
    valor += 30           
}

incrementa();
console.log(valor)
incrementa()
console.log(valor)

//FUNÇÃO COM PARÂMETRO:

function mostraNome(nome){
    console.log(nome)    
}

mostraNome("Guilherme");
mostraNome("Guilherme Gonçalves");

function soma(numero1, numero2){
   let resultado = numero1 + numero2
    console.log(resultado);
}

soma(20, 15)
soma(9, 7)

//FUNÇAÕ COM RETURN

function subtracao(numero1, numero2){
    let resultado = numero1 + numero2

    return resultado
}

const mostrarSub = subtracao(6, 2)
console.log(mostrarSub)


//ARROW FUNCTION:

const multiplicacao = (numero1, numero2) => {
    let resultado = numero1 * numero2
    return resultado
}

const multi = multiplicacao(4, 5)
console.log(multi) 

// OU DE MANEIRA REDUZIDA

const divisao = (numero1, numero2) => numero1 / numero2

const divida = divisao(50, 5)

console.log(divida)



