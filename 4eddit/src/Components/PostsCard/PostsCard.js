import React, { useState } from 'react'
import { PostCardContainer, InfoBars, ContentContainer, BottomDetails } from './Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

const PostCard = () => {

    const [ positiveVote, setPositiveVote ] = useState(false)
    const [ negativeVote, setNegativeVote ] = useState(false)

    return(
        <PostCardContainer>
            <InfoBars>
                Nome do usuário
            </InfoBars>

            <ContentContainer>
                Aqui será o conteudo do post!
            </ContentContainer>

            <InfoBars>
                <BottomDetails>
                    <ArrowUpward onClick={handleClick} style={{color: (positiveVote ? '#108238' : '#000000')}} />
                    0
                    <ArrowDownward onClick={handleClick} style={{color: (negativeVote ? '#FF0000' : '#000000')}} />
                </BottomDetails>
                <BottomDetails>
                    0 comentarios
                </BottomDetails>
            </InfoBars>
        </PostCardContainer>
    )
}

export default PostCard