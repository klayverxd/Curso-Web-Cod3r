function divisivel (numero) {
    let divisivel = numero % 3 ? false : true
    return divisivel
}

console.log(divisivel(6))
console.log(divisivel(5))