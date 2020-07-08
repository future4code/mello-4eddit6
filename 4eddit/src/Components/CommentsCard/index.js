import React from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'

const CommentsCard = (props) => {
    
    const comment = props.comment

		return(
      <CardContainer>
			<InfoBars>
        <Typography variant='h5'>{comment.username}</Typography>
			</InfoBars>
			<ContentContainer>
        <Typography variant='h5'>{comment.title}</Typography><br/>
        <Typography variant='h6'>{comment.text}</Typography>
			</ContentContainer>
			<InfoBars>
				<BottomDetails>
					<ArrowUpward />
          <Typography>{comment.votesCount}</Typography>
					<ArrowDownward />
				</BottomDetails>
			</InfoBars>
		</CardContainer>
		)
}

export default CommentsCard