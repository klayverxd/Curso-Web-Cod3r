console.log(soma(3, 4))

// function declaration  -  primeiro é carregado as funções
function soma(x, y) {
    return x + y
}

// function expression (função anônima)  -  só pode ser chamada depois da função
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression  -  só pode ser chamada depois da atribuição
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))