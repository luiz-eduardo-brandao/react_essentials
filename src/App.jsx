import './App.css'
import React from "react";

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

// export default permite retornar function anonima e arrow function

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Desafio MegaSena" color="#B9006E">
                <Mega />
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21} />
                {/* <UsuarioInfo usuario={{ nome: 'Fernando' }} /> */}
                <UsuarioInfo usuario={{}} />
            </Card>

            <Card titulo="#07 - Tabela Produtos" color="#342ca7">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65" >
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#84c1ff" >
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#fe4a49" >
                <Aleatorio min={1} max={60}  />
            </Card>

            <Card titulo="#03 - Fragmento" color="#f4b6c2"> 
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#005b96">
                <ComParametro 
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.4}
                />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#b3cde0">
                <Primeiro />
            </Card>
        </div>
    </div>
)