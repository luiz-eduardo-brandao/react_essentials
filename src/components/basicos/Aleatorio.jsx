import React from "react";

export default (props) => {
    // const aleatorio = parseInt(Math.random() * (props.max - props.min) + props.min)
    const numAleatorio = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo:</strong> {props.min} </p>
            <p><strong>Valor Máximo:</strong> {props.max} </p>
            <p><strong>Valor escolhido: </strong>{ numAleatorio }</p>
        </div>
    )
}