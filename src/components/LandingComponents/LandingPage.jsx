import React from 'react'
import { Route, Switch } from 'react-router'
import Register from './Register'
import Login from './Login'

function LandingPage(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login isLoggedIn={props.isLoggedIn}/>
        </Route>
        <Route path="/register">
          <Register isLoggedIn={props.isLoggedIn}/>
        </Route>
      </Switch>
    </div>
  )
}

export default LandingPage
