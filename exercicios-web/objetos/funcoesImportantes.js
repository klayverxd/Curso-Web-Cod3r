const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Objeto é um par de chave e valor
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
// Array com arrays externos com chaves e valores
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {   // Percorrer os elementos do entries com destructuring
    console.log(`${chave}: ${valor}`)
})

// Define propriedades de um atributo
Object.defineProperty(pessoa, 'dataNascimento', {  // objeto, nome do atributo, propriedades
    enumerable: true,   // se poderá ser enumerado/listado
    writable: false,  // se poderá ser editada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)   // propriedade que nao permite ser escrita
console.log(Object.keys(pessoa))   // Permite ser listado

// Object.assign (ECAMScrip 2015)  -  Concatenação de objetos
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}   // o valor 'a' será sobrescrito
const obj = Object.assign(dest, o1, o2)  // o primeiro recebe e os outros concatenam com o primeiro
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)