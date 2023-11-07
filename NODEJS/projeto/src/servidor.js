const express = require('express')
const app = express()
const port = 3003

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Iphone 15', valor: 8000})
})

app.listen(port, () =>{
    console.log('listening on port')
})