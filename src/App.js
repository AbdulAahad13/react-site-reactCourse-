import React from 'react'
import Home from './Components/pages/Home';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import SignUp from './Components/pages/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services ' component={Services} />
          <Route path='/Products ' component={Products} />
          <Route path='/Signup ' component={SignUp} />
        </Switch>

      </Router>

    </>
  );
}

export default App;
