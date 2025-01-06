import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Busqueda from './components/Busqueda'


function App() {

  return (
    <>
      <Header />
      <div className='body'>
        <Menu />
        <Busqueda />

      </div>
    </>
  )
}

export default App
