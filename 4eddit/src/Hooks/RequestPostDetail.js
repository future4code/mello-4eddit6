import { useState, useEffect } from 'react'
import api from '../Utils/Api/Api'

export const useRequestPost = (url) => {
  const [ data, setData ] = useState({})
  const token = window.localStorage.getItem('token')

  const getPostDetail = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
  }
    const response = await api.get(url, axiosConfig)
    setData(response.data)
  }

  useEffect(() => {
    getPostDetail()
  }, [url])

  return { data, getPostDetail }
}