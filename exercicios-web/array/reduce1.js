// no reduce, ele recebe o valor atual, se no caso for a primeira chamada
// após isso ele pega o valor acumulado
// também podendo ser escolhido o valor inicial

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
        console.log(acumulador, atual)
        return acumulador + atual
    }, 10) //valor inicial, se desejar

console.log(resultado)