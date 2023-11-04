const fs = require('fs')

const produto = {
    carro: "BMW",
    preco: 200.000,
    ano: 2019
}

fs.writeFile(__dirname + '/arquivo.json', JSON.stringify(produto), error => {
    console.log(error || 'produto salvo!!')
})