import React from 'react'
import './crudAction.scss';

function AddJob(props) {
    const add=()=>{
        props.toggle()
    }
  return (
    <div className="addJob">
     <button onClick={()=>add()}> Add Jobs</button>
    </div>
  );
}

export default AddJob;