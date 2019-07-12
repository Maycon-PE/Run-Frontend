import React from 'react'

//Estilos
import './css/index.css'

// Componentes
import Nav from '../../components/Menu'
import Footer from '../../components/Footer'
import Inicio from '../../components/Start/Inicio'
import Fakes from '../../components/Start/Fakes'
import Parts from '../../components/Start/Parts'
import HowPlay from '../../components/Start/HowPlay'


export default props =>
<>
  <Nav />
  <div className='homepage'>
    <Inicio push={props.history} />
    <Fakes />
    <Parts />
    <HowPlay />
    <Footer />
  </div>
</>