// 1 - Usando notação literal
const obj1 = {}
console.log(obj1)

// 2 - Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// 3 - Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome  // Visível para fora da função
    this.getPrecoComDesconto = () => {   // Método público
        return preco * (1 - desc)
    }
}
// Posso altear o nome do produto, mas não preço e desconto
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4 - Função factory (com notação literal)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas))   // salário de um dia
        }
    }
}

const f1 = criarFuncionario ('João', 7980, 4)
const f2 = criarFuncionario ('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto - JSON (texto)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')  // converte os dados em objetos
console.log(fromJSON.info)