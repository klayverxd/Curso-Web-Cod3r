/**
 * Objeto é par Nome e Valor
 * (Atenção no escopo das variáveis)
 */

const saudacao = 'Opa'  //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa'  //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares Nome/Valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Beira Rio',
        numero: 432
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)