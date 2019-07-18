import React from 'react'

//Estilos
import './css/index.css'

// Componentes
import Nav from '../../components/Menu'
import Footer from '../../components/Footer'
import Inicio from '../../components/Home/Inicio'
import Fakes from '../../components/Home/Fakes'
import Parts from '../../components/Home/Parts'
import HowPlay from '../../components/Home/HowPlay'


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