import React, { useState } from "react";
import MultiUseState from "./components/MultiUseState"
import Nota from "./components/ElevacaoState/Nota";
import Resultado from "./components/ElevacaoState/Resultado";

export default function App() {
/*
  const [notas, setNotas] = useState({ "nota1": "", "nota2": "", "nota3": "", "nota4": "" })
  const handleSetNotas = (e) => {
    if (e.target.getAttribute('name') == 'nota1') {
      setNotas({ "nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4 })

    } else if (e.target.getAttribute('name') == 'nota2') {
      setNotas({ "nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3, "nota4": notas.nota4 })

    } else if (e.target.getAttribute('name') == 'nota3') {
      setNotas({ "nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value, "nota4": notas.nota4 })

    } else if (e.target.getAttribute('name') == 'nota4') {
      setNotas({ "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.target.value })
    }
  }
*/
  return (
    <>
      <MultiUseState />
      
      <hr />
      <Nota num={1} name={'nota1'} nota={notas.nota1} setNota={(e) => handleSetNotas(e)} />
      <Nota num={2} name={'nota2'} nota={notas.nota2} setNota={(e) => handleSetNotas(e)} />
      <Nota num={3} name={'nota3'} nota={notas.nota3} setNota={(e) => handleSetNotas(e)} />
      <Nota num={4} name={'nota4'} nota={notas.nota4} setNota={(e) => handleSetNotas(e)} />
      <Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)} />
    </>
  );
}