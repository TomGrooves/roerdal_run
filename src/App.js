import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import FrontPage from './sites/frontpage/frontpage';
import AboutPage from './sites/aboutpage/aboutpage';
import SignUpPage from './sites/signuppage/signuppage';
import DistancePage from './sites/distancepage/distancepage';
import NotFoundPage from './sites/notfoundpage/notfoundpage';
import AttendingPage from './sites/attendingpage/attendingpage';
import NavBar from './components/navbar/navbar';
import Ratings from './sites/ratingpage/ratings';
import './sites/main.scss'


function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/roerdal_run/forside">
          <FrontPage/>
        </Route>
        <Route exact path="/roerdal_run/om rørdal run">
          <AboutPage/>
        </Route>
        <Route exact path="/roerdal_run/kommenter">
          <Ratings/>
        </Route>
        <Route exact path="/roerdal_run/tilmelding">
          <SignUpPage/>
        </Route>
        <Route exact path="/roerdal_run/deltagere">
          <AttendingPage/>
        </Route>
        <Route exact path="/roerdal_run/distancer">
          <DistancePage/>
        </Route>
        <Route exact path="/roerdal_run/">
          <FrontPage/>
        </Route>
        <Route path="/*">
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;