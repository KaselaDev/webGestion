import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import Icon from './componentes/Icon'
import Navegador from './componentes/Navegador'
import Menu from './componentes/Menu'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <main className='mainGeneral'>
      <Navegador />
      <Menu />
    </main>
  </>
)
