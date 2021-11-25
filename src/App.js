import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Profile from './pages/Profile';

function App() {
  const [login, setlogin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <button onClick={() => setlogin(!login)}>{login ? "logout" : "login"}</button>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profile'>
         <Profile login = {login}/>
        </Route >
        <Route path='/post' component={Post} />
        <Route component={NotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
