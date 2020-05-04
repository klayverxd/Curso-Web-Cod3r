/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

function tabuada(num1, num2) {
    console.log(`A soma de ${num1} + ${num2} é ${num1 + num2}`)
    console.log(`A subtração de ${num1} - ${num2} é ${num1 - num2}`)
    console.log(`A multiplicação de ${num1} * ${num2} é ${num1 * num2}`)
    if (num2 == 0){
        console.log('Divisão inválida!')
    } else {
    console.log(`A divisão de ${num1} / ${num2} é ${num1 / num2}`)
    }
}

tabuada(4, 2)
tabuada(5, 2)
tabuada(3, 0)