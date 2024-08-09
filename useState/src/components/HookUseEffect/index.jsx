import React, { useEffect, useState } from "react";

export default function effectUse() {

    const [contagem, setContagem] = useState(0)

    useEffect(
        () => {
            console.log("Página carregada")
            document.title='Contagem: ' + contagem
        }
    )

    return (
        <>
            <p>contagem: {contagem}</p>
            <button onClick={() => setContagem(contagem + 1)}>Contar</button>
        </>
    )
}