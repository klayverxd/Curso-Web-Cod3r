// criando o método forEach2, entendendo o funcionamento
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// método que tem uma callback para cada iteração do Array, que recebe 3 parâmetros (nome, índice, array)
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})