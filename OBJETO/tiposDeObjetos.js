//NOTAÇÃO LITERAL
const objeto1 = {
    nome: 'Gui',
    idade: 20
}

console.log(objeto1)

//OBJECT EM JS
const objeto2 = new Object
objeto2.nome = 'Paulo'
objeto2.idade = 20

console.log(objeto2)

//FUNÇÃO CONSTRUTORA
function Objeto3(nome, idade){
    this.nome = nome
    this.idade = idade
    this.getNomeeIdade = () => {
        return `${this.nome} tem ${this.idade} anos`
    }
}

const pessoa1 = new Objeto3('Julio', 20)
console.log(pessoa1.getNomeeIdade())

//FUNÇÃO FACTORY
function Objeto4(nome, idade) {
    return {
            nome,
            idade,
            getNomeeIdade(){
                return `${nome} tem ${idade} anos` 
           }
        }
}

const p1 = Objeto4("Cesar", 20)
console.log(p1.getNomeeIdade())

//OBJECT CREATE
const filho = Object.create(null)
filho.nome = "Vandson"
filho.idade = 20

console.log(filho.nome, filho.idade)

//EM FORMA DE JSON
const fromJSON = JSON.parse('{"nome":"Rochael","idade":"20"}') 
console.log(fromJSON.nome, fromJSON.idade)

