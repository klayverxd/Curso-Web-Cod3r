function bhaskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0) {
        console.log('Delta é negativo')
    } else {
        let resultados = []
        resultados[0] = (-bx + Math.sqrt(delta)) / 2 * ax2
        resultados[1] = (-bx - Math.sqrt(delta)) / 2 * ax2
        console.log(`As duas raízes são ${resultados[0]} e ${resultados[1]}`)
    }
}

bhaskara(1, 3, 2)
bhaskara(3, 1, 2)