import React from 'react';

import {updateJobs} from '../../../crud-services/services';

function HideJob(props) {
  const changeStatus= ()=>{
    let jobs =props.actionData;
    jobs.status = "Hide";
    updateJobs(jobs);
  }
  return (
    <div className="hideJob">
     <button onClick={changeStatus}>Hide</button>
    </div>
  );
}

export default HideJob;