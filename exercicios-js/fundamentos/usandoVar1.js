/**
 * Var possuem dois tipos de escopo:
 * -Escopo global (acessável em todo o código)
 * -Escopo de função (acessável apenas dentro da função)
 */

{
    {
        {
            {
                var sera = 'Será???'  //desde que não seja ma função, será visível fora do bloco
                console.log(`Dentro do bloco: ${sera}`)
            }   
        }
    }
}

console.log(`Fora do bloco: ${sera}`)

function teste(){
    var local = 123   //o escopo é apenas dentro da função
    console.log(`Dentro da função: ${local}`)
}

teste()
console.log(`Fora da função: ${local}`)
