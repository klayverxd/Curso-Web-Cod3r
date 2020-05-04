function recordes (pontuacoes) {
    let recordeEPior = []

    let recorde = pontuacoes[0]
    let quantidadeRecorde = 0
    let pontuacaoPior = pontuacoes[0]
    let posicaoPior = 0

    for(let i in pontuacoes) {
        if(pontuacoes[i] > recorde){
            recorde = pontuacoes[i]
            quantidadeRecorde++
        }
        if(pontuacoes[i] < pontuacaoPior) {
            pontuacaoPior = pontuacoes[i]
            posicaoPior = i
        }
    }

    recordeEPior[0] = quantidadeRecorde
    recordeEPior[1] = parseInt(posicaoPior) + 1

    return (recordeEPior)
}

console.log(recordes([10, 20, 20, 8, 25, 3, 0, 30, 1]))