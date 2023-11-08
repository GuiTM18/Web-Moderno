const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser');
const banco = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
})

app.listen(port, () =>{
    console.log('listening on port')
})