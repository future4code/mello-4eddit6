import React, { useState } from 'react'
import { CardContainer, InfoBars, ContentContainer, BottomDetails } from '../../Styled'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

const PostCard = () => {

    const [ positiveVote, setPositiveVote ] = useState(true)
    const [ negativeVote, setNegativeVote ] = useState(false)
    

    return(
        <CardContainer>
            <InfoBars>
                Nome do usuário
            </InfoBars>

            <ContentContainer>
                Aqui será o conteudo do post!
            </ContentContainer>

            <InfoBars>
                <BottomDetails>
                    <ArrowUpward style={{color: (positiveVote ? '#108238' : '#000000')}} />
                    0
                    <ArrowDownward style={{color: (negativeVote ? '#FF0000' : '#000000')}} />
                </BottomDetails>
                <BottomDetails>
                    0 comentarios
                </BottomDetails>
            </InfoBars>
        </CardContainer>
    )
}

export default PostCard