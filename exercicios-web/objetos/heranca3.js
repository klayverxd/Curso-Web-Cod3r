const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)   //Prototipando pai para filha1
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {   // passando um atributo para filha2 e definindo suas propriedades
    nome: { value: 'Bia', writable: false, enumerable: true }  
})

console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {  // Percorrendo os atributos
    filha2.hasOwnProperty(key) ?   // Se o atributo pertence a ela
    console.log(key) : console.log(`Por herança: ${key}`)
}