function fatorial(numero) {
    if(numero == 0 || numero == 1){
        return 1
    } else {
        var resultado = 1
        for(let i = numero; i > 0; i--) {
            resultado *= i 
        }
        return resultado
    }
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))