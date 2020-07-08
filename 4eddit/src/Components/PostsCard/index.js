import React from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'

const PostCard = (props) => {

  const postInfo = props.post
  
  const history = useHistory()

  const { postId } = useParams()

  const goToDetails = (id) => {
    history.push(`/posts/${id}`)
  }

	return(
		<CardContainer>
			<InfoBars>
        <Typography variant='h5'>{postInfo.username}</Typography>
			</InfoBars>
			<ContentContainer>
        <Typography variant='h5'>{postInfo.title}</Typography>
        <Typography variant='h6'>{postInfo.text}</Typography>
			</ContentContainer>
      <InfoBars>
				<BottomDetails>
					<ArrowUpward />
          <Typography>{postInfo.votesCount}</Typography>
					<ArrowDownward />
				</BottomDetails>
				<BottomDetails>
          { postId ? <Typography>{postInfo.commentsCount} comentários</Typography>:
          <Typography onClick={() => goToDetails(postInfo.id)}>{postInfo.commentsCount} comentários</Typography>
          }
				</BottomDetails>
			</InfoBars>
		</CardContainer>
	)
}

export default PostCard