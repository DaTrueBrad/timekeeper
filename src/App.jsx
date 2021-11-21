
import { Route, Switch } from 'react-router';
import './App.css';
import Dashboard from './components/DashboardComponents/Dashboard';
import Export from './components/DashboardComponents/Export';
import Footer from './components/DashboardComponents/Footer';
import Timekeeper from './components/DashboardComponents/Timekeeper';
import User from './components/DashboardComponents/User';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
