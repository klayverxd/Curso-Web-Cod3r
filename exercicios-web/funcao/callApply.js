/**
 * A diferença de Call e Apply é de como é repassado os parametros
 */
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco   // associa à função
}

global.preco = 20
global.desc = 0.1   // Para nao ficar NaN
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

/**
 * Call: o primeiro parametro sempre é o contexto (null, carro, global, objeto)
 * Depois são os parametros da função
 */
console.log(getPreco.call(carro, 0.17, '$'))

/**
 * Apply: o primeiro paramentro será o objeto que será usado como contexto de execução
 * Depois é um array com todos os outros parametros
 */
console.log(getPreco.apply(carro, [0.17, '$']))

console.log(getPreco.apply(global, [0.17, '$']))