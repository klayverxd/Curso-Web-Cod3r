/**
 * Desestruturação em objetos se usa chaves {}
 */
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa  //retirou do objeto duas variáveis
console.log(nome, idade)

const {nome: n, idade: i} = pessoa   //retira o atributo com o nome da variavel com o nome depois da vírgula
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa  //se o atributo nao estiver no objeto, retornará undefined ou outro que eu tiver atribuido
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)