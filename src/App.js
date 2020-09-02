import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FrontPage from './sites/frontpage/frontpage';
import AboutPage from './sites/aboutpage/aboutpage';
import SignUpPage from './sites/signuppage/signuppage';
import DistancePage from './sites/distancepage/distancepage';
import NotFoundPage from './sites/notfoundpage/notfoundpage';
import AttendingPage from './sites/attendingpage/attendingpage';
import MobileNavBar from './components/mobilenavbar/mobilenavbar';
import './sites/main.scss'

function App() {
  
  return (
    <Router>
      <MobileNavBar/>
      <Switch>
        <Route exact path="/forside">
          <FrontPage/>
        </Route>
        <Route exact path="/om rørdal run">
          <AboutPage/>
        </Route>
        <Route exact path="/tilmelding">
          <SignUpPage/>
        </Route>
        <Route exact path="/deltagere">
          <AttendingPage/>
        </Route>
        <Route exact path="/distancer">
          <DistancePage/>
        </Route>
        <Route exact path="/">
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