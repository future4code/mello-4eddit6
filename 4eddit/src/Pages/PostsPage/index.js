import React, { useState, useEffect } from 'react'
import { Container, GoBackContainer } from './Styled'
import { useParams, useHistory } from 'react-router-dom'
import PostCard from '../../Components/PostsCard'
import CommentsCard from '../../Components/CommentsCard'
import {  ArrowBack } from '@material-ui/icons'
import {  makeStyles, Fab } from '@material-ui/core'
import { FullContainer } from '../../Styled'
import api from '../../Utils/Api/Api'
import CreateComment from "../../Components/CreateComment";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const token = localStorage.getItem('token')

const PostsPage = () => {
  
  const classes = useStyles();
  const { postId } = useParams();
  const history = useHistory();
  const [ details, setDetails ] = useState({})

  const getDetails = async() => {
    const axiosConfig = {
      headers:  {
          Authorization: token
      }
    }

    const response = await api.get(`/posts/${postId}`, axiosConfig)
    setDetails(response.data.post)
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <FullContainer>
      <CreateComment />
      <Container>
        <PostCard post={details} />

        {comments &&
          comments
            .map(comment => (
              <CommentsCard 
                key={comment.id} 
                comment={comment} 
               />
              ))
          }

        <GoBackContainer>
          <Fab
            size="large"
            variant="extended"
            className={classes.margin}
            onClick={() => history.push("/posts")}
          >
            <ArrowBack className={classes.extendedIcon} />
            Voltar
          </Fab>
        </GoBackContainer>
      </Container>
    </FullContainer>
  );
};

export default PostsPage;
