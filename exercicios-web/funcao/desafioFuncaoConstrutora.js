function Pessoa (nome) {
    this.nome = nome

    this.falar = function() {   // Método falar
        console.log(`Meu nome é ${this.nome}`)   // .this acessa apenas a variável dentro do construtor
    }
}

const p1 = new Pessoa ('João')
p1.falar()