const produto = new Object  // Função contrutora que instancia um objeto
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{   // array de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 34
    }],
    calcularValorDoSeguro: function() {   // funções dentro dos objetos
        // ...
    }
}

// Dois tipos de notações e acessos
carro.proprietario.endereco.numero = 10000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)  // posso acessar coisas que não existem, mas irá retornar undefined
//console.log(carro.condutores.length)  // não tem como saber uma coisa de algo que não está definido