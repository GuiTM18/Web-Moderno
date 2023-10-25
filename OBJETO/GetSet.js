const multiplique = {
    _valor: 2,

    get valor(){
        return this._valor * 4
    },
    set valor(valor){
        this._valor = valor 
    }
}

console.log(multiplique.valor)