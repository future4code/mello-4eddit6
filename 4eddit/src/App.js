import React, { useReducer } from "react";
import { AppContainer } from './Styled'
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom'
import FeedContext from './Utils/Context/FeedContext'
import { useRequestData } from './Hooks/UseRequestData'

function App() {

  const { data } = useRequestData('/posts')
  const posts = data.posts

  return (
    <FeedContext.Provider value={posts}>
        <BrowserRouter>
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
    </FeedContext.Provider>
  );
}

export default App;
