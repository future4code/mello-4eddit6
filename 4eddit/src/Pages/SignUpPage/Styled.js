import styled from 'styled-components';

export const FullContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const ScreenDivision = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    :first-of-type{
        background-image: url('https://images5.alphacoders.com/387/387334.jpg');
        background-repeat: no-repeat;
}
`

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