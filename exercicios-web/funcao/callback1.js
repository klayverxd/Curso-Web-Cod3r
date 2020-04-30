/**
 * O método forEach executa uma dada função em cada elemento de um array
 */
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// dentro do array temos a função forEach
// para cada elemento do array é chamado a função
fabricantes.forEach(imprimir)  // retornou dois elementos
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})