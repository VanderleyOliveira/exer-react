import React from 'react';

export default function DigaOla() {
    function handleClick(nome) {
        alert(`Olá, ${nome}!`);
    }

    return (
        <button onClick={() => handleClick('People!')}>
            Diga olá
        </button>
    );
}