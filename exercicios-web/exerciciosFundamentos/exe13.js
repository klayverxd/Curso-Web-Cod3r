function diaSemana(dia) {
    switch (dia){
        case 1:
            return 'Fim de semana'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break
        case 7:
            return 'Fim de semana'
            break
        default:
            return 'Dia inválido'
    }
}

console.log(diaSemana(0))
console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(3))
console.log(diaSemana(4))
console.log(diaSemana(5))
console.log(diaSemana(6))
console.log(diaSemana(7))
console.log(diaSemana(8))