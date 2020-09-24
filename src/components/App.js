import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './header/Header';
import Card from './card/Card'
import './App.css';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Router>
        <Switch>
          <Route path='/'>
            <Card/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
