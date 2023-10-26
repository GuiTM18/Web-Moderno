const avo = {
    Attr: 'A'
}
const pai = {
    __proto__: avo, 
    Atributo: 'B'
}
const filho = {
    __proto__: pai,
    atrib: 'C'
}

console.log(filho.Atributo, filho.Attr, filho.atrib)

////////////////////////////////////////////////////////////////

const vo = {
    Attr: 'A'
}
const mae = {
    
    Atributo: 'B'
}
const filha = {
    
    atrib: 'C'
}

Object.setPrototypeOf(mae, vo)
Object.setPrototypeOf(filha, mae)

console.log(filha.Atributo, filha.Attr, filha.atrib)