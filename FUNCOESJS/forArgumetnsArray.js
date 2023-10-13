function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
    
}

console.log(soma(8, 4))
console.log(soma(10, 5, 4, 1))

console.log(soma("teste", "aagain"))
console.log(soma("teste", 1, 6, "ok"))