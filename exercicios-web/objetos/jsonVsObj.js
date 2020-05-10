/**
 * JSON - Notação de objetos em JS
 * Formato mais simples para migração entre sistemas
 * Formato de dados
 * Formato textual
 * Comunicar sistemas com tecnologias diferentes
 * Fácil leitura
 * 
 * Não possui funções por ser um formato textual, e não dados executáveis
 */

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }

console.log(JSON.stringify(obj))  // converte para JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))  // Objeto formado a partir de um formato de texto - atributos com aspas duplas 
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))  // strings delimitadas por aspas duplas