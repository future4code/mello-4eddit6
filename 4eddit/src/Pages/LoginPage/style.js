import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding-left: 10px;
  /*background: linear-gradient(to bottom right, #006600 0%, #99cc00 100%);*/
  color: yellowgreen;
  text-shadow: 3px 3px 3px black;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 50px;
  margin-left: 38%;
  padding: 0;
  width: 300px;
  height: 400px;
  /*background: linear-gradient(to bottom right, #006600 0%, #99cc00 100%);*/
  font-weight: bolder;
  color: #e2ef70;
  text-shadow: 5px 5px 5px black;
  box-shadow: 10px 0 10px 0 #e2ef70;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 5px solid #e2ef70;
  /* background: linear-gradient(to right 45deg, #0c1f38 30%, #ff99cc 90%);*/
  color: #e2ef70;
  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px 2px black;
  font-weight: bold;
  height: 300px;
  width: 200px;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #00cc99;
  color: #e2ef70;
  font-weight: bold;
`;
