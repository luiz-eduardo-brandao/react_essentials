import React from "react";

export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 25
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                <strong>Filho</strong>
            </div>
            <button
                style={{backgroundColor: '#8BAD39', color: '#fff', fontWeight: 'bold'}}
            
                onClick={e => props.quandoClicar('Dudu', gerarIdade(), gerarNerd())}
            >
                Fornecer Informações
            </button>
            <button style={{backgroundColor: '#84c1ff', color: '#fff', fontWeight: 'bold', marginLeft: '3px'}}
                onClick={e => props.limpar()}
            >
                Limpar
            </button>
        </div>
    )
}