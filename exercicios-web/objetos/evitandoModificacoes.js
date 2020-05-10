// Object.preventExtensions (não poderá aumentar a quantidade de atributos) pode até excluir e modificar
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))  // função retorna se o objeto foi criado com o preventExtensions

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal  (não consegue adicionar, excluir, mas consegue modificar os atributos)
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))  // retorna se o objeto está selado

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = selado + valores constantes  (não consegue fazer nada com ele)
// writable = false