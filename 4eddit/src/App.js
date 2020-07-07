import React from "react";
import { AppContainer } from './Styled'
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
