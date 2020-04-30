let dobro = function(a) {
    return 2 * a
}
/**
 * Função arrow é sempre uma função anônima
 * Se quiser chamá-la, tem que armazenar em alguma variável ou constante
 */
dobro = (a) => {
    return 2 * a
}
/**
 * Tirar os parenteses se tiver apenas um parametro
 * Retorno implícito
 */
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!'  // '_' é um parametro só que é ignorado
console.log(ola())