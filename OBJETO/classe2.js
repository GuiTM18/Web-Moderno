class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "dentista") {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super("Gonçalves");
    }
}

const filho = new Filho();
console.log(filho)
