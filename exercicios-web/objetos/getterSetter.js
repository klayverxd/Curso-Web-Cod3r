const sequencia = {
    _valor: 1,  // convenção para que o atributo seja acessada apenas internamente
    // get e set são funções onde os valores são acessados
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)