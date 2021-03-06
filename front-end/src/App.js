import React from 'react';
import './App.css';
import Header from './components/header';
import Account from './components/pages/account'
import Login from './components/pages/login';
import Register from './components/pages/register';
import './components/header';
import resetPass from './components/pages/resetPass';
import {BrowserRouter as Router, Route
} from "react-router-dom";
import PasswordReset from './components/pages/resetPass';

function App() {
  return (
    <>
    <Header/>
    <Router>

      <Route exact path="/account" component={Account}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/resetPassword" component={resetPass}/>
      <Route exact path="/PasswordReset" component={PasswordReset}/>
    </Router>
    </>

  );
}

export default App;
