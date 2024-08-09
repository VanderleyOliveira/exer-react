import React, { useState } from 'react';

export default function CampoDeTexto() {
    const [texto, setTexto] = useState('');

    function handleChange(event) {
        setTexto(event.target.value);
    }

    return (
        <div>
            <p>Digite e veja o que você está digitando logo abaixo:</p>
            <input className='inputText' type="text" onChange={handleChange} />
            <p>Você digitou: {texto}</p>
        </div>
    );
}