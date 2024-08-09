import './App.css'
import DigaOla from './components/DigaOla'
import CliqueAqui from './components/CliqueAqui'
import CampoDeTexto from './components/CampoDeTexto'

export default function App() {

  return (
    <>
      <div className='container'>
        <CliqueAqui />
        <DigaOla />
        <CampoDeTexto />
      </div>

    </>
  )
}