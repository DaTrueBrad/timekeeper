import React from 'react'
import { Route, Switch } from 'react-router'
import Export from './Export'
import Footer from './Footer'
import Timekeeper from './Timekeeper'
import User from './User'

function Dashboard() {
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
}

export default Dashboard
