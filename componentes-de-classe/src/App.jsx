import React from 'react'
import ClasseComponent from './components/comp-classe/Classe'
import ClasseProps from './components/comp-classe/Classe-props'
import Carro from './components/comp-classe-usestate/Carro'
import Carro2 from './components/manipulacao-state/Index'

export default function App() {

  return (
    <>
      <ClasseComponent/>
      <ClasseProps ponto="Zoo" local="Fortal"/>
      <hr />
      <Carro/>
      <Carro2 fator={5}/>
    </>
  )
}