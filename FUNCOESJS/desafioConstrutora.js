function Produto(marca, preco, ano){
    this.marca = marca 
    this.preco = preco
    this.ano = ano

    this.qualidade = function(x){
        return  console.log(`O produto está ${x}`)
    }
}

const prod1 = new Produto("Fiat", 50.000, 2014)
console.log(prod1)
 
prod1.qualidade("OK")