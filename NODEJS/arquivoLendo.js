const { Console } = require('console')
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf8')

console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf8', function(err, conteudo){
    const confing = JSON.parse(conteudo)
    console.log(confing.db.host, confing.db.port)
})

const confing = require('./arquivo.json')
console.log(confing.db.host, confing.db.port)