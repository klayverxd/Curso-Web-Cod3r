function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    //throw 'mensagem'
    throw {   //será executado quando cair no catch (lançar)
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try {   //bloco do possível erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {   //tratamento do erro
        tratarErroELancar(e)
    } finally {   //sempre será executado independente do erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)