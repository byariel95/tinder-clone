import React from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Card from './card/Card'
import Footer from './footer/Footer';
import ChatList from './ChatList/ChatList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat'>
            <Header backButtom ='/'/> 
            <ChatList/>
          </Route>
          <Route path='/'>
          <Header/> 
            <Card/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
