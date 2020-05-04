function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    capitalInicial = capitalInicial + capitalInicial * taxaDeJuros * tempoDeAplicacao
    console.log(`O montante em juros simples é: ${capitalInicial}`)
}

function jurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    capitalInicial = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    console.log(`O montante em juros composto é: ${capitalInicial}`)
}

jurosSimples(100, 10/100, 2)
jurosCompostos(100, 10/100, 2)