class Pessoa {
    constructor(nome) {
        this.nome = nome   // Variável pública
    }

    falar() {   // Método falar
        console.log(`Meu nome é ${this.nome}`)   // .this acessa apenas a variável dentro do construtor
    }
}

const p1 = new Pessoa ('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // acessa a variavel em qualquer local pois nao tem o .this
    }
}

const p2 = criarPessoa('João')
p2.falar()