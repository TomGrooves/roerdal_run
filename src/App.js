import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

function App() {
  
  return (

    <Router>
      <Navbar/>
      <Switch>
      <Route path="/forside">
          <div>Forside</div>
        </Route>
        <Route path="/om rørdal run">
          <div>About page</div>
        </Route>
        <Route path="/tilmelding">
          <div>Tilmelding</div>
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <Route path="/distancer">
          <div>Distancer</div>
        </Route>
        <Route path="/*">
          <div>404 page not found</div>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;