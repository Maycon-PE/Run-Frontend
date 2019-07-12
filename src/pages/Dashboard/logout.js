import { useEffect } from 'react'

export default props => {
  useEffect(() => {
    sessionStorage.removeItem('token')
    props.history.push('/')
  }, [props.history])

  return null
}

