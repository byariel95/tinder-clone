import React from 'react';
import './App.css';
import Header from './header/Header';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Router>
        <Switch>
          <Route path='/'>
            <h1>home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
