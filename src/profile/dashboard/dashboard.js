

import React,{ useState } from "react";
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
    const [tab,setTab] = useState(0);

  return (
    <div className="dash">
      <Router>
        <div className="menu">
          <div>
            <Profile></Profile>
          </div>
          <div className="sidemenu">
            <ul>
              <li className={tab ===0 ? "active" : ""  }>
                <Link onClick = { () => setTab(0) } to="/">Home</Link>
              </li>
              <li className={tab ===1 ? "active" : ""  }>
                <Link onClick = { () => setTab(1) } to="/subDashboard">Dashboard</Link>
              </li>
              <li className={tab ===2 ? "active" : ""  }>
                <Link onClick = { () => setTab(2) }to="/jobs">Jobs</Link>
              </li>
              <li className={tab ===3 ? "active" : ""  }>
                <Link onClick = { () => setTab(3) } to="/docs">Docs</Link>
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