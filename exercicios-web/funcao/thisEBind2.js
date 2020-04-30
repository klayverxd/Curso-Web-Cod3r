function Pessoa () {
    this.idade = 0   // criado com o this para que possa ser manipulado

    const self = this
    
    setInterval(function() {   // dispara outra função com determinado intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)   // chamadas da função no intervalo que for passado em milissegundos
}

new Pessoa