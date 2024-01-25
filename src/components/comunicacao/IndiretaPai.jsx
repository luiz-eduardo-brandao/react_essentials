import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformações(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    function limpar() {
        setNome('?')
        setIdade(0)
        setNerd(false)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformações} limpar={limpar}/>
        </div>
    )
}