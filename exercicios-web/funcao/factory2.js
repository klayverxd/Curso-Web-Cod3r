/**
 * Factory pode retornar objetos ou funções
 */

function criarProduto(nome, preco) {
    return {
        nome,   // nome: nome  -  mesma coisa, pois o atributo é o mesmo nome da variável
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Sabao', 2))
console.log(criarProduto('Televisao', 3455.49))