import './Mega.css'
import React, { useState }  from "react";

export default props => {
    const numerosIniciais = Array(6).fill(0)
    let [numeros, setNumeros] = useState(numerosIniciais)
    let [qtdeNumeros, setQtde] = useState(5)

    let resultadoNumeros = []

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtdeNumeros)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [ ...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    function gerarNumerosEdu() {
        let arrayNumeros = []

        for(let i = 0; i < qtdeNumeros; i++) {
            let numeroGerado = parseInt(Math.random() * (60 - 1 + 1) + 1)

            console.log('numeroGerado: ', numeroGerado)

            if(!(arrayNumeros.find(numero => numero == numeroGerado))) {
                arrayNumeros.push(numeroGerado)
            }
        }
        
        let arrayNumerosOrdenados = arrayNumeros.sort()

        resultadoNumeros = arrayNumerosOrdenados.map(num => {
            return (
                <span key={num}>{num},</span>
            )
        })
    }

    return (
        <div className='Mega'>
            <h2>MegaSena</h2>
            <label htmlFor="qtdeNumInput">Quantos números deseja gerar?</label>
            <input 
                id="qtdeNumInput" 
                type="number" 
                value={qtdeNumeros}  
                onChange={e => setQtde(+e.target.value)}  
            />
            
            <div>
                <button onClick={ _ => setNumeros(gerarNumeros(qtdeNumeros))}>Gerar Números</button>
            </div>

            <div>
                <h3>Resultado:</h3>
                <h2>{numeros.join(' - ')}</h2>
            </div>
        </div>
    )
}