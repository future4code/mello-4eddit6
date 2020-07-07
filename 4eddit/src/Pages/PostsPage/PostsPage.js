import React from 'react'
import PostCard from '../../Components/PostsCard/PostsCard'
import CommentsCard from '../../Components/CommentsCard/CommentsCard'
import { Container } from './Styled'
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../Hooks/UseRequestData'
import { useRequestPost } from '../../Hooks/RequestPostDetail'


const PostsPage = () => {

  const { postId } = useParams()

  const {data} = useRequestPost(`/posts/${postId}`)

  console.log(data)

  return(
    <Container>
      
      {/* {comments && comments.map(comment => {
        return <CommentsCard comment={comment} />
      })} */}
      
    
      
		</Container>
  )
}

export default PostsPage