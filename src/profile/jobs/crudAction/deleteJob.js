import React from 'react';

import {deleteJobs} from '../../../crud-services/services';

function DeleteJob(props) {
  const deteleJob =()=>{
    deleteJobs(props.actionData);
    props.triggerChange()
  }
  return (
    <div className="DeleteJob">
     <button onClick={deteleJob}> Delete</button>
    </div>
  );
}

export default DeleteJob;