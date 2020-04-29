const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {   // percorre por índices do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 23,
    peso: 56
}

for(let atributo in pessoa) {   // percorre atributos de um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

/**
 * Usar let nas variáveis nos for's para nao ser acessável no resto do código
 */