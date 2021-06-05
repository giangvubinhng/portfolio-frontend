import React, { useContext } from 'react'
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import Login from './Components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {myContext} from './Context';

function App() {
  const userObject = useContext(myContext);
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
      
      {
        userObject ? <Route path="/admin" component={Admin}/> : (
          <Route path="/login" component={Login}/>
        )
      }
      <Route path='/' exact component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
