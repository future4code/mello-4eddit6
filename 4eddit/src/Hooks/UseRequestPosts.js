import { useState, useEffect } from 'react'
import api from '../Utils/Api/Api'

export const useRequestPosts = (url) => {
  const [ posts, setPosts ] = useState([])
  const token = window.localStorage.getItem('token')

  const getPosts = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
  }
    const response = await api.get(url, axiosConfig)
    setPosts(response.data.posts)
  }

  useEffect(() => {
    getPosts()
  },[])

  return { posts, getPosts }
}