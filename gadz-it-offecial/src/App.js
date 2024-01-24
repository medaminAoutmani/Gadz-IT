
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageBL from './pages/HomePageBL';
import LoginPage from './pages/LoginPage';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/Home' component={HomePageBL} />
          <Route exact path='/Login' component={LoginPage} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
