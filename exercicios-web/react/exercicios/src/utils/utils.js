import React from 'react'

// função para passar para os filhos as propriedades do pai
export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { 
            ...props, ...child.props
        })
    })
}