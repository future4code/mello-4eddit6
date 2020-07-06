import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 450px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 16px;
`;

export const Divider = styled.span`
	display: flex;
    align-items: center;
	color: rgba(0, 0, 0, 0.35);
	margin: 8px 0px;
    
    ::before, ::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
    margin: 0px 10px;
    }
`

export const SignUpFields = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
`