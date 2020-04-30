const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)  // se retirar o this, não recohece a variável saudação
    }
}

pessoa.falar()
const falar = pessoa.falar  // guarda a função numa variável que nao vai mais conter a variável saudação, o this mudou
falar()    // não reconhece saudação, pois o this mudou

const falarDePessoa = pessoa.falar.bind(pessoa)   // bind é um método que amarra amarra o this no que for passado como parâmetro 
// não muda a função, muda apenas o valor onde foi chamado
falarDePessoa()