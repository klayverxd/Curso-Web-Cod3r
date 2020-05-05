function venderFruta(fruta) {
    switch (fruta.toLowerCase(fruta).toString().replace('ç', 'c').replace('ã', 'a')) {
        case 'maca':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return 'Estamos em escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Erro, fruta inválida'
    }
}

console.log(venderFruta('maçã'))
console.log(venderFruta('kiwi'))
console.log(venderFruta('melancia'))
console.log(venderFruta('alcatra'))