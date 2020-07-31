const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

//  1- Seleciona todos os elementos com a classe '.tag'
//  2- transforma a tagName para lowerCase
//  3- altera a cor da borda do elemento de acordo com o nome de sua tag, pela função criada
//  4- verifica se contém a classe nolabel na lista de classes do elemento
//  5- injeta uma tag no elemento (label)
//  6- altera a cor do background (label)
//  7- insere o nome da tag do elemento dentro do label
//  8- coloca a tag label antes do primeiro elemento, passando o que será inserido e a posição

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})