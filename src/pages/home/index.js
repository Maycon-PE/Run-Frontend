import React, { useState, useEffect } from 'react'

import './functions'

//Estilos
import { Container, Loading } from '../../styles'

// Componentes
import Nav from '../../components/Menu'
import Inicio from '../../components/Home/Inicio'
import Fakes from '../../components/Home/Fakes'
import Parts from '../../components/Home/Parts'
import HowPlay from '../../components/Home/HowPlay'

const inicialStateScreen = {
  inicio: false,
  bots: false,
  parts: false,
  help: false
}

const Home = ({ history }) => {
  const [body, setBody] = useState({ ...inicialStateScreen })
  const [ready, setReady] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const body = { ...inicialStateScreen }
    body.inicio = true
    setReady(true)
    setBody(body)
  }, [])

  const changeBody = aba => {
    const render = { ...inicialStateScreen }
    render[aba] = true

    setBody(render)
  }

  const renderBody = render => {
    if (render.inicio) return <Inicio push={history} />
    if (render.bots) return <Fakes />
    if (render.parts) return <Parts />
    return <HowPlay />
  }

  useEffect(() => {
    setContent(ready? (
        <React.Fragment>
          <Nav changeBody={changeBody} />
          <Container className='Home'>
            {renderBody(body)}
          </Container>
        </React.Fragment>
      ) : (
        <Loading>
          <img src='./image/loading.gif' alt='Logo de carregamento' />
        </Loading>
      )
    )
  }, [body])


  return content
}

export default Home
