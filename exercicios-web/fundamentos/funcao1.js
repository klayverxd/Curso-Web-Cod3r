//função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
console.log('Função sem retorno: ')
imprimirSoma(2, 3)
imprimirSoma(2)   //o outro valor é undefined, resultado NaN
imprimirSoma(2, 5, 4, 3, 6)   //pega os dois primeiros números
imprimirSoma()

//função com retorno

console.log('\nFunção com retorno: ')

function soma(a, b = 1){  //valor fixo quando não for passado
    return a + b
}
console.log(soma(2, 3))
console.log(2)
console.log(soma())