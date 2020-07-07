import React, { useState, useContext } from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import FeedContext from '../../Utils/Context/FeedContext'
import { Typography } from '@material-ui/core'
import { useToken } from '../../Hooks/UseToken'
import { useHistory } from 'react-router-dom'

const PostCard = (props) => {

  useToken()

  const postInfo = props.post
  
  const history = useHistory()

  const goToPostDetails = (id) => {
    history.push(`/posts/${id}`)
  }

	return(
		<CardContainer>
			<InfoBars>
        <Typography variant='h5'>{postInfo.username}</Typography>
			</InfoBars>
			<ContentContainer>
        <Typography variant='h5'>{postInfo.title}</Typography><br/>
        <Typography variant='h6'>{postInfo.text}</Typography>
			</ContentContainer>
			<InfoBars>
				<BottomDetails>
					<ArrowUpward />
          <Typography>{postInfo.votesCount}</Typography>
					<ArrowDownward />
				</BottomDetails>
				<BottomDetails>
          <Typography onClick={() => goToPostDetails(postInfo.id)}>{postInfo.commentsCount} comentários</Typography>
				</BottomDetails>
			</InfoBars>
		</CardContainer>
	)
}

export default PostCard