//SITE QUE EXPLICA O THIS: https://www.webdevdrops.com/javascript-this-71dd763aad52/

const pessoa = {
    saudacao: 'Olá mundo',

    falar() {
        console.log(this.saudacao)
    }   
}

pessoa.falar()
const fale = pessoa.falar 
fale() // AQUI FICA EM UNDERFINED PORQUE ELE NÃO CONSEGUE VINCULAR A SAUDACAO

const faleAGR = pessoa.falar.bind(pessoa)
faleAGR() // O USO DO BIND RESOLVE O PROBLEMA


fale.call(pessoa)// FORMA SIMPLES TAMBEM COM O CALL