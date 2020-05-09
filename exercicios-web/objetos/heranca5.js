// Toda função tem um .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {   // .reverse não existe como atributo mas foi criado
    return this.split('').reverse().join('')  // Separa, inverte, junta  -  acessa com this
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())