
import './App.css';
import Export from './components/DashboardComponents/Export';
import Footer from './components/DashboardComponents/Footer';
import Timekeeper from './components/DashboardComponents/Timekeeper';
import User from './components/DashboardComponents/User';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Export />
      <Footer />
    </div>
  );
}

export default App;
