/**
 * Possui dois trabalhos
 * compra tv de 50 e toma sorvete se os dois derem certo
 * compra tv de 32 e toma sorvete se um dos dois derem certo
 * nao compra nada nem toma sorvete se os dois derem errado e fica saudável
 */
function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete   //operador unário
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    //naõ precisa repassar o (chave/valor), repassa automaticamente com objetos
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))