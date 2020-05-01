const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Meu método com callback, não utilizei .push
{
    let i = 0

    let notasBaixas = []

    function adicionarNota(nota) {
        if(nota < 7){
            notasBaixas[i] = nota
            i++
        }
    }
    notas.forEach(adicionarNota)

    console.log(notasBaixas)
}

// SEM CALLBACK (AULA)
{
    let notasBaixas = []
    for(let i in notas) {   // Índices do arrray
        if(notas[i] < 7) {
            notasBaixas.push(notas[i])  // .push Adicionar um elemento no array
        }
    }

    console.log(notasBaixas)
}

// COM CALLBACK
{
    let notasBaixas = notas.filter(function(nota) {   // filter retora verdadeiro ou falso, se vai ser adicionado no novo array
        return nota < 7
    })

    console.log(notasBaixas)
}

// COM ARROW
{
    let notasBaixas = notas.filter(nota => nota < 7)

    console.log(notasBaixas)
}