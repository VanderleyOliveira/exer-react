import React from "react";

export default class Carro2 extends React.Component {

    constructor(props) {
        super(props)
        this.modelo = 'Gol 2013'
        this.state = {
            ligado: false,
            velAtual: 0,
        }
    }
    ligarDesligar() {
        this.setState(
            (state) => ({
                ligado: !state.ligado
            })
        )
    }
    acelerar() {
        this.setState(
            (state, props) => (
                { velAtual: state.velAtual + props.fator }
            )
        )
    }

    render() {
        return (
            <div>
                <h1>Meu Carro 2</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Vel. Atual: {this.state.velAtual}</p>
                <button onClick={() => this.ligarDesligar()}>
                    {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
                </button>
                <button onClick={() => this.acelerar()}>
                    Acelerar
                </button>
            </div>
        )
    }
}