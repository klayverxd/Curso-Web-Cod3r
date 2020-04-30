function comparaComThis (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)   // amarrou o this no obj

comparaComThis(global)
comparaComThis(obj)

/**
 * O this da função arrow sempre vai ser associado no contexto que a função foi escrita
 * Nem o .bind muda isso
 * No caso abaixo foi o module.exports
 * */

let comparaComThisArrow = param => console.log(this === param)

comparaComThis(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)