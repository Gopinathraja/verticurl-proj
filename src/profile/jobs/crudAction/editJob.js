import React from 'react'

function EditJob(props) {
  return (
    <div className="editJob">
     <button onClick={props.action}> Edit</button>
    </div>
  );
}

export default EditJob;