import React, { useState, useEffect } from 'react'
import PostCard from '../../Components/PostsCard'
import { Container, LogoutContainer } from './Styled'
import {  ExitToApp } from '@material-ui/icons'
import { Fab, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { FullContainer } from '../../Styled'
import api from '../../Utils/Api/Api'
import Skeleton from 'react-loading-skeleton'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const token = localStorage.getItem('token')

const FeedPage = () => {

  const [ posts, setPosts ] = useState([])
  const classes = useStyles()
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.replace('/')
  }

  const getPosts = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
    }

    const response = await api.get('/posts', axiosConfig)
    setPosts(response.data.posts)
  }

  useEffect(() => {
    getPosts()
  },[])


	return(
    <FullContainer>
      <Container>
        <LogoutContainer> 
          <Fab variant='extended' size='large' className={classes.margin} onClick={handleLogout}>
            Logout
            <ExitToApp className={classes.extendedIcon} />
          </Fab>
        </LogoutContainer>
        {posts.length ? posts.map(post => (<PostCard key={post.id} post={post} />)) : Array(4).fill().map((item, idx) => (<Skeleton key={idx} height={200} width={600} />))}
      </Container>
    </FullContainer>
  )
}

export default FeedPage