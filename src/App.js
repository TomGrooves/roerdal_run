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

function App() {
  
  return (

    <Router>
      <MobileNavBar/>
      <Switch>
      <Route path="/forside">
          <FrontPage/>
        </Route>
        <Route path="/om rørdal run">
          <AboutPage/>
        </Route>
        <Route path="/tilmelding">
          <SignUpPage/>
        </Route>
        <Route path="/deltagere">
          <AttendingPage/>
        </Route>
        <Route path="/distancer">
          <DistancePage/>
        </Route>
        <Route path="/*">
          <NotFoundPage/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;