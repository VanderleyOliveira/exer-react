import React from 'react'
import ClasseComponent from './components/comp-classe/Classe'
import ClasseProps from './components/comp-classe/Classe-props'
import Carro from './components/comp-classe-usestate/Carro'

export default function App() {

  return (
    <>
      <ClasseComponent/>
      <ClasseProps ponto="Zoo" local="Fortal"/>
      <hr />
      <Carro/>
    </>
  )
}