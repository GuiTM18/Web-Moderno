function Carro(velocidadeMAx = 200, delta = 5){

    //METODO PRIVADO
    let velocidadeAtual = 0

    //METODO PUBLICO
    this.acelerar = function(){
        if(velocidadeAtual + delta  <= velocidadeMAx){
            velocidadeAtual += delta

        }else{
            velocidadeAtual = velocidadeMAx
    }

    //METODO PUBLICO
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
}
const uno = new Carro()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(250, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())