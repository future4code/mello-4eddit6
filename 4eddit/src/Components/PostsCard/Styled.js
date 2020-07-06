import styled from 'styled-components';

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 300px;
    border: 1px solid black;
`;

export const InfoBars = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
    height: 50px;

    :last-of-type{
        border-bottom: none;
        border-top: 1px solid black;
        height: 30px;
    }
`

export const ContentContainer = styled.div`
    flex: 1;
    padding: 16px;
    display: flex;
`

export const BottomDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: space-between;

    :last-of-type{
        flex: 7;
        justify-content: flex-end;
    }
`