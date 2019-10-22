import './App.css';
import Login from './components/pages/login';
import Register from './components/pages/register';
import './components/header';
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Login}/>
    </Router>

  );
}

export default App;
