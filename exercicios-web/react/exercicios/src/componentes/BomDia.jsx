import React from 'react'

// React.Fragment/Fragment -> tag que não é renderizada no HTML
// props -> propriedades/atributos que são passadas para o componente
export default props => [
  <h1 key='h1'>Bom dia {props.nome}!</h1>,
  <h2 key='h2'>Sua idade é {props.idade}</h2>
]

// export default props => 

// <React.Fragment>
//   <h1>Bom dia {props.nome}!</h1>
//   <h2>Sua idade é {props.idade}</h2>
// </React.Fragment>
