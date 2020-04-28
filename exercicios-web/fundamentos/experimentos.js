let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)

console.log(global.b)
console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this)

console.log(module.exports)
// module.exports = { c: 456, d: false, e: 'teste' }

//variavel sem ser var e let, vai para o escopo global
abc = 3
console.log(global.abc)