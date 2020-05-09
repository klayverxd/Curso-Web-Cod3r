// Cadeia de protótipos (prototype chain)
// Usa-se __proto__ para referenciar

Object.prototype.attr0 = '0'  // não é recomendado fazer isso

const avo = {attr1: 'A'}   // A cadeia superior referencia para object.prototype

const pai = {__proto__: avo, attr2: 'B', attr3: '3'}

const filho = {__proto__: pai, attr3: 'C'}  //Sombreamento sobre o de cima

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324  // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`   // super referencia o atributo do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)   // ferrari tem carro como seu protótipo == ferrari = {__proto__: carro}
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())  // chamando a função status do pai

ferrari.acelerarMais(300)
console.log(ferrari.status())  // sombreamento na velMax