function Pessoa () {
    this.idade = 0   // criado com o this para que possa ser manipulado
    
    setInterval(() => {   // dispara outra função com determinado intervalo
        this.idade++
        console.log(this.idade)
    }, 1000)   // chamadas da função no intervalo que for passado em milissegundos
}

new Pessoa