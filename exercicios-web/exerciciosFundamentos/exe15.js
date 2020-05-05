function revendaCarros(modelo) {
    switch (modelo.toLowerCase(modelo)) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan':            
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(revendaCarros('hatch'));
console.log(revendaCarros('motocicleta'));
console.log(revendaCarros('sedan'));
console.log(revendaCarros('caminhonete'));
console.log(revendaCarros('jetski'));