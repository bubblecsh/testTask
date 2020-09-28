import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import PictureFeedPage from './Pages/PictureFeedPage'
import SinglePicturePage from "./Pages/SinglePicturePage";

function App() {
  return (
      <Switch>
        <Route exact={true} path='/' component={PictureFeedPage}/>
        <Route path='/picture/:id' component={SinglePicturePage}/>
      </Switch>
  )
}

export default App;
