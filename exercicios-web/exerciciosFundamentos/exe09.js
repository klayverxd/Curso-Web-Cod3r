function classificaAluno (nota) {
    let notaCorrigida = arredonda(nota)

    if (notaCorrigida < 40){
        console.log(`Reprovado com a nota: ${notaCorrigida}`)
    } else {
        console.log(`Aprovado com a nota: ${notaCorrigida}`)
    }
}

function arredonda (nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)