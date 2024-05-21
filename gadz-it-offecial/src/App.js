
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePageBL from './pages/HomePageBL';
import HomePageAL from './pages/HomePageAL';
import LoginPage from './pages/LoginPage';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/Home' component={HomePageBL} />
          <Route exact path='/Login' component={LoginPage} />
          <Route exact path='/Home+Create+Project' component={HomePageAL} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
