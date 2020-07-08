import React, { useEffect } from "react";
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom'
import FeedContext from './Utils/Context/FeedContext'
import { useRequestPosts } from "./Hooks/UseRequestPosts";

const App = () => {

  const { posts } = useRequestPosts('/posts')

  const getToken = () => {
    return localStorage.getItem('token')
  }

  useEffect(() => {
    getToken()
  })

  return (
    <FeedContext.Provider value ={posts}>
        <BrowserRouter>
          {/* <AppContainer token={getToken()}> */}
            <Routes />
          {/* </AppContainer> */}
        </BrowserRouter>
    </FeedContext.Provider>
  );
}

export default App;
