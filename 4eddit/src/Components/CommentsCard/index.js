import React, { useState, useEffect } from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import Skeleton from 'react-loading-skeleton'

const CommentsCard = (props) => {
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)

  },[])
    
    const comment = props.comment

		return(
      <CardContainer>
			<InfoBars>
        <Typography variant='h5'>{ isLoading ? <Skeleton width={200} height={'auto'} /> : comment.username}</Typography>
			</InfoBars>
			<ContentContainer>
        <Typography variant='h5'>{isLoading ? <Skeleton /> : comment.title}</Typography>
        <Typography variant='h6'>{isLoading ? <Skeleton /> : comment.text}</Typography>
			</ContentContainer>
			<InfoBars>
				<BottomDetails>
					<ArrowUpward />
          <Typography>{isLoading ? <Skeleton width={20} height={16} /> : comment.votesCount}</Typography>
					<ArrowDownward />
				</BottomDetails>
			</InfoBars>
		</CardContainer>
		)
}

export default CommentsCard;
