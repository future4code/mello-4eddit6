import { useState, useEffect } from 'react'
import api from '../Utils/Api/Api'

export const useRequestDetails = (url) => {
  const [ details, setDetails ] = useState({})
  const token = window.localStorage.getItem('token')

  const getDetails = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
  }
    const response = await api.get(url, axiosConfig)
    setDetails(response.data.post)
  }

  useEffect(() => {
    getDetails()
  },[])

  return { details, getDetails }
}