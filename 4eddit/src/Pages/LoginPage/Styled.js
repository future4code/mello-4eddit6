import styled from "styled-components";

export const LoginContainer = styled.div`
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

export const Logo = styled.div`
  h3 {
    color: white;
  }
`

export const LoginFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  width: 300px;
  height: 360px;
  padding: 16px;

  h3{
    color: blue;
  }
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 160px;
`

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
