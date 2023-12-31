//OBJETO

let pessoa = {
    nome: "Guilherme",
    idade: 20,
    feliz: true,
    pets: ["cachorro", "gato"],  //OBJETO ARRAY
    carros: {
        civic: {
            cor: "preto",
            placa: "JK987SS"
        },                      //OBJETO DENTRO DE OBJETO
        bmw: {
            cor: "branco",
            placa: "KJ568AA"
        }
    },
    andar: function (km) {
        console.log((pessoa.nome + " andou " + km + "km"));
        return pessoa.andar
    }
}

//ACESSANDO PROPIEDADES E ALTERANDO VALORES

console.log(pessoa.pets[1])
pessoa.nome = "Arthur"
console.log(pessoa.nome)
console.log(pessoa.carros.civic.cor)

pessoa.andar(20)

const carro = {
    marca: 'Ferrari',
    placa: 'JS85FG',
    ano: 2022,
    condutores: [{
        nome: 'Guilherme',
        idade: 20,
    }, {
        nome: 'Pedro',
        idade: 30,
    } ],

}

console.log(carro)

delete carro.placa

console.log(carro)