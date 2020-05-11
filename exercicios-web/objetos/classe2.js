class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {   // Classe gerada a partir da classe Avo
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)   // Chama a função construtora da superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')  // Passou para o construtor de pai e setou a profissão automaticamente
    }
}

const filho = new Filho
console.log(filho)