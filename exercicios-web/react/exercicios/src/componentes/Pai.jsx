import React from 'react'

import { childrenWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* cloneElement -> clonar um único elemento adicionando mais propriedades */}
            {
                childrenWithProps(props)
            }
        </ul>
    </div>