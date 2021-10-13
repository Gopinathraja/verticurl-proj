

import React from "react";
import './dashboard.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './profile';

import JobsContainer from '../jobs/appContainer';

export default function Dashboard() {
  
  return (
    <div className="dash">
      <Router>
        <div className="menu">
          <div>
            <Profile></Profile>
          </div>
          <div className="sidemenu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/subDashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              </ul>  
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/subDashboard">
              <SubDashboard />
            </Route>
            <Route path="/jobs">
              <JobsContainer />
            </Route>
            <Route path="/docs">
              <Docs />
            </Route>
          </Switch>
          </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function SubDashboard() {
  return (
    <div>
      <h2>Dashboard </h2>
    </div>
  );
}

function Docs() {
  return (
    <div>
      <h2>See Docs </h2>
    </div>
  );
}