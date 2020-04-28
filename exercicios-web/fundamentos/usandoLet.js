/**
 * Let possui escopo de:
 * Função
 * Bloco
 * Global
 */

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)