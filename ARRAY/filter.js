let produtos = [
    { nome: 'Notebook Lenovo', preco: 3200, fragil: true},
    { nome: 'Iphone 15 Pro Max', preco: 7200, fragil: true},
    { nome: 'Copo de vidro', preco: 20, fragil: true},
    { nome: 'Copo de plástico', preco: 3.50, fragil: false},
]

console.log(produtos.filter(function(e){ //filtra o array
    return true
}))

//Retorne apenas o que for caro e frágil
console.log(produtos.filter(function(e){
    if (e.preco > 1000 && e.fragil === true){
        return e
    }
}))