import React from 'react'
import Post from './components/form' 
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Edit from './components/edit'

const App = () => {

  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Post} >
          
        </Route>
        <Route path="/edit" component={Edit}>
         
        </Route>
      </Switch>
    </BrowserRouter>
   
    </>
  )
}

export default App
