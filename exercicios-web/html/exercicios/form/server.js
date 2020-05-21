//importando express
const express = require('express')
//instancia express na variável app
const app = express()
//importando bodyParse
const bodyParser = require('body-parser')

//interpreta e cria um objeto
app.use(bodyParser.urlencoded({extended: true}))

//requisição do tipo POST em cima da url /usuarios
app.post('/usuarios', (req, resp) => {
    //imprimir o que veio no body
    console.log(req.body)
    //quando for utilizado o método get, os dados vem pela url
    console.log(req.query)
    //envia como resposta uma string
    resp.send('<h1>Parabéns, usuário incluido!</h1>')
})

//requisição do tipo POST em cima da url /usuarios
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    //imprimir o que veio no body
    console.log(req.body)
    //envia como resposta uma string
    resp.send('<h1>Parabéns, usuário alterado!</h1>')
})

//a porta que vai ser acessada
app.listen(3003)