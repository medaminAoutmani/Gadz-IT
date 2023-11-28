
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/Home' component={HomePage} />
          <Route exact path='/Login' component={LoginPage} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
