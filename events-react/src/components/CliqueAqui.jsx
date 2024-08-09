import React from 'react';

export default function CliqueAqui() {
  function handleClick() {
    alert('Você clicou no botão!');
  }

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  );
}