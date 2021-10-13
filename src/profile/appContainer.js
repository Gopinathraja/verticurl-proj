import React,{useState} from 'react';
import './app.scss';
import Dashboard from './dashboard/dashboard';

function AppContainer() {

  return (
    <div className="appContainer">
     <Dashboard></Dashboard>
    </div>
  );
}

export default AppContainer;