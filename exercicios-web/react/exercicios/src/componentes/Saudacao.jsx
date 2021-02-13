import React, { Component } from 'react'

export default class Saudacao extends Component {
    // as propriedades passadas para os componentes são de apenas de leitura/não alteravel

    // state -> é uma propriedade alterável/estado do objeto
    // componente controlável -> componente só é atualizado quando o estado/evento muda
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        // necessário para as propriedades serem enviadas para o super/Components
        super(props)
        
        // bind -> para referenciar o componente atual, que é Saudação
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        // setState -> função para alterar o estado
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        // setState -> função para alterar o estado
        this.setState({ nome: e.target.value })
    }

    render() {
        // desestruturando props, pq usa classes
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />

                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}