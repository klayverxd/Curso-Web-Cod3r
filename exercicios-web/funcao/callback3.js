// Exemplo de callback no browser
// Atribuir ao onclick um callback sempre que o usuário clicar no body
document.getElementsByTagName('body')[0].onclick = function(e) {  // acessa os elementos a partir de uma tag e retorna vários elementos em array
    console.log('O evento ocorreu!')   // Podemos ter acesso ao evento que ocorreu
}