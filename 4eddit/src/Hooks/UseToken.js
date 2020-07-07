import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const useToken = () => {
  const token = window.localStorage.getItem('token')
  const history = useHistory()

  useEffect(() => {

    if(token){
      history.replace('/posts')
    } else {
      history.replace('/')
    }
  }, [history, token])
}