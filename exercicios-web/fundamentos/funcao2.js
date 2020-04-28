//Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b){   //
    console.log(a + b)
}

imprimirSoma (2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log (soma(2, 3))

//Retorno implícito  (quando não tem chaves, função com apenas uma sentença retornável)
console.log('\nRetorno implícito')

const subtracao = (a, b) => a-b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)  //função arrow com apenas um parametro nao precisa de parenteses
imprimir2('Top da balada!!!')