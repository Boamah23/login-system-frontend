import React from 'react';
import './App.css';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Header from './components/header';
import resetPass from './components/pages/resetPass';
import {BrowserRouter as Router, Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/resetPassword" component={resetPass}/>
    </Router>
    </>

  );
}

export default App;
