import React from 'react'
import { Route, Switch } from 'react-router'
import Export from './Export'
import Footer from './Footer'
import Timekeeper from './Timekeeper'
import User from './User'

function Dashboard(props) {
  if (props.status) {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/time">
            <Timekeeper />
          </Route>
          <Route path="/dashboard/user">
            <User />
          </Route>
          <Route path="/dashboard/export">
            <Export />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="full-page">
        <h1>Please Log In</h1>
        <h2>Please click here to return to home page</h2>
        <a href="/" className='normal-link'><button>Return</button></a>
      </div>
    )
  }
  
}

export default Dashboard
