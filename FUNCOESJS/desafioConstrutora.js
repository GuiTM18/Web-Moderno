class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa("Guii")
pessoa1.falar()


function Pessoa2(){
    let name = ""

    this.getName = function(){
        return console.log(name)
    }
}
const p1 = new Pessoa2
console.log(p1.getName('fgdjs'))