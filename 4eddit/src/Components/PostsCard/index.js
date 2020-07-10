import React, { useEffect, useState} from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const PostCard = (props) => {

  const postInfo = props.post
  const history = useHistory()
  const { postId } = useParams()
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)

  },[])

  const goToDetails = (id) => {
    history.push(`/posts/${id}`)
  }

	return(
		<CardContainer>
			<InfoBars>
        <Typography variant='h5'>{ isLoading  ? <Skeleton height={'auto'} width={200} /> : postInfo.username}</Typography>
			</InfoBars>
			<ContentContainer>
        <Typography variant='h5'>{ isLoading  ? <Skeleton width={200} /> : postInfo.title}</Typography>
        <Typography variant='h6'>{ isLoading  ? <Skeleton width={200} /> : postInfo.text}</Typography>
			</ContentContainer>
      <InfoBars>
				<BottomDetails>
					<ArrowUpward />
          <Typography>{ isLoading  ? <Skeleton height={16} width={20} /> : postInfo.votesCount}</Typography>
					<ArrowDownward />
				</BottomDetails>
				<BottomDetails>
          { postId ? <Typography>{ isLoading  ? <Skeleton height={16} width={20} /> : postInfo.commentsCount} comentários</Typography>:
          <Typography onClick={() => goToDetails(postInfo.id)}>{ isLoading  ? <Skeleton height={16} width={20} /> :postInfo.commentsCount} comentários</Typography>
          }
				</BottomDetails>
			</InfoBars>
		</CardContainer>
	)
}

export default PostCard