/**
 * Funções anônimas não possuem nomes
 * Podem ser passadas por parâmetro
 * Ser atributo de um objeto
 * Geralmente são grardadas em variáveis e/ou constantes
 * Funções Arrow sempre serão anônimas
 */
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    // falar(){}  também é valido na nova versão
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()