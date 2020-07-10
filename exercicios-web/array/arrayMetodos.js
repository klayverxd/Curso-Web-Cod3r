const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

// adiciona na ultima posição
pilotos.push('Vestappen')
console.log(pilotos)

// remove a ultima posição
pilotos.shift()
console.log(pilotos)

// adiciona na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice
const algunsPilotos1 = pilotos.slice(2) // novo array a partir do argumento
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array do 1 ao 4, execeto o 4
console.log(algunsPilotos2)