
import { Route, Switch, Redirect } from 'react-router';
import React, {useState, useEffect} from 'react'
import './App.css';
import Dashboard from './components/DashboardComponents/Dashboard';
import Register from './components/LandingComponents/Register';
import LandingPage from './components/LandingComponents/LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  function setStatus() {
    setIsLoggedIn(!isLoggedIn)
  }
  useEffect(() => {
    if(localStorage.getItem('user')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard isLoggedIn={setStatus} status={isLoggedIn}/>
        </Route>
        <Route path="/">
          {isLoggedIn ? <Redirect to='/dashboard/time/' /> : <LandingPage isLoggedIn={setStatus}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
