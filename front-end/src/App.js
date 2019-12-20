import React from 'react';
import './App.css';
import Header from './components/header';
import Account from './components/pages/account'
import './components/header';
import {BrowserRouter as Router, Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Router>

      <Route exact path="/account" component={Account}/>
    </Router>
    </>

  );
}

export default App;
