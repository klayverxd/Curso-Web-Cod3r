const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// método que tem uma callback para cada iteração do Array, que recebe 3 parâmetros (nome, índice, array)
aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

// armazenando a função em uma variável
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)