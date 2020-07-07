import { useState, useEffect } from 'react'
import api from '../Utils/Api/Api'

export const useRequestData = (url) => {
  const [ data, setData ] = useState({})
  const token = window.localStorage.getItem('token')

  const getData = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
  }
    const response = await api.get(url, axiosConfig)
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [token])

  return { data, getData }
}