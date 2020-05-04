/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

function divisao(dividendo, divisor) {
    if (divisor == 0){
        console.log('Divisão inválida!')
    } else {
        console.log(`A divisão de ${dividendo} por ${divisor} é ${dividendo / divisor}`)
        console.log(`O resto da divisão é ${dividendo % divisor}`)
    }
}

divisao(4, 2)
divisao(5, 2)
divisao(4, 0)