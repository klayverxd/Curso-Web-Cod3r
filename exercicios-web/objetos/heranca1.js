const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.prototype)  //prototype existem apenas em funções
console.log(ferrari.__proto__)  // Acessa o protótipo do objeto (objeto pai)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)  // Não tem um protótipo acima (null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)