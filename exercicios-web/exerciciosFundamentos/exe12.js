function fatorial(numero) {
    let repete = numero - 1
    let resultado = numero
    if(numero == 1 || numero == 0) {
        console.log(resultado)
    } else {
        while (repete != 1) {
            resultado = (repete + 1) * repete
            repete--
            fatorial(repete)
        }
        console.log(resultado)
    }
}

fatorial(0)
fatorial(1)
fatorial(2)
fatorial(3)
fatorial(4)