import styled from 'styled-components';

export const AppContainer = styled.div`
	max-width: 100vw;
	min-height: 100vh;
	display: flex;
  flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`

export const CardContainer = styled.div`
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
  flex-direction: column;
`

export const BottomDetails = styled.div`
	display: flex;
	align-items: center;
	padding: 8px;

  :nth-of-type(n){
    flex:1;
    justify-content: flex-start;
  }
  :nth-of-type(2n){
    flex: 1;
    justify-content: flex-end;
  }
`