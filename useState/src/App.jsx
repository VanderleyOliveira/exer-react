import React from "react";
import MultiUseState from "./components/MultiUseState/MultiUseState"
import NotasResultados from "./components/ElevacaoState/Index";
import BoxChannel from "./components/Contencao/Index";
import EffectUse from "./components/HookUseEffect/index";


export default function App() {

  return (
    <>
      <MultiUseState />
      <hr />
      <NotasResultados/>
      <hr />
      <BoxChannel/>
      <hr />
      <EffectUse/>
    </>
  );
}