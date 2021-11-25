import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom'; 
 
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
  <Switch>
    <Route path= '/' component = {Home} exact />
    <Route path= '/about' component = {About}/>
    <Route path= '/profile' component = {Profile}/>
    <Route component = {NotFound}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
