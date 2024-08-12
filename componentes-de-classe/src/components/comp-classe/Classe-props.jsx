import React from "react";

export default class ClasseProps extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Componente com Props de Classe</h1>
                <p>Ponto: {this.props.ponto}</p>
                <p>Local: {this.props.local}</p>
            </div>
        )
    }
}