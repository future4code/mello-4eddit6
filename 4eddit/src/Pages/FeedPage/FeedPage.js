import React, { useContext } from 'react'
import { useToken } from '../../Hooks/UseToken'
import PostCard from '../../Components/PostsCard/PostsCard'
import FeedContext from '../../Utils/Context/FeedContext'
import { Container } from './Styled'


const FeedPage = () => {

  useToken()

  const posts = useContext(FeedContext)
  
	return(
    <Container>
      {posts && posts.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
    </Container>
  )
}

export default FeedPage