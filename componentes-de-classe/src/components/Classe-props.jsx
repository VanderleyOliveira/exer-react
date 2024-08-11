import React from "react";

export default class ClasseProps extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Componente com Props de Classe</h1>
                <p>Tema: {this.props.tema}</p>
                <p>Tema: {this.props.local}</p>
            </div>
        )
    }
}