import './Contador.css'
import React, { Component } from "react";

import Display from './Display';
import PassoForm from './PassoForm';
import Buttons from './Buttons';

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    setInc = () => {
        // setState vem de React.Component
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    setDec = () =>  {
        if(this.state.numero > 0){
            this.setState({
                numero: this.state.numero - this.state.passo
            })
        }
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Buttons inc={this.setInc} dec={this.setDec}/>
            </div>
        )
    }
}

export default Contador