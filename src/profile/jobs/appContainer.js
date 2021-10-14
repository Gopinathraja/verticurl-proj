import React, { useEffect, useState } from 'react';
import './app.scss'
import AddJob from './crudAction/addJob';
import ListTable from './tableData/itemList';
import { getJobs } from '../../crud-services/services';

import ModalData from '../../modal/modal';
import Form from '../../form/formFields';

/** context created to consume jobs data in form */
const MyContext = React.createContext(); 


function JobsContainer(props) {

  const [data,setData] = useState();
  const [fields,setFields] = useState({title:"",status:"",posted:"",applicants:""});
  const [showpopup,setShowpopup] = useState(false);
  const [formtype,setFormtype] = useState("add");

  useEffect(()=>{
    apiCall()
  },[showpopup])

  const toggle =()=>{
      setShowpopup(!showpopup)
  }
  const apiCall =()=>{
    const jobs = getJobs();
    
    jobs.then((res)=>{setData(res);})
  }

  const editJobs = (fields)=> {
    setFields(fields);
    setShowpopup(true);
    setFormtype("edit")
  }

  const triggerChange = ()=>{
      setShowpopup(false);
      setTimeout(()=>{ apiCall(); }, 1000);
  }

  return (
    <div className="jobs-container">
      <div className="row">
          <div className="Title">Jobs</div>
          <AddJob toggle={toggle}></AddJob>
      </div>
      <MyContext.Provider value={ editJobs} >
        {data && <ListTable list ={data} editJobs={editJobs} triggerChange={() =>triggerChange}></ListTable>}
      </MyContext.Provider>

      {(fields && showpopup) && <ModalData modalIsOpen = {showpopup } toggle ={toggle}><Form fields = {{...fields,...{formType:formtype} }} triggerChange={triggerChange}></Form></ModalData>}
    </div>
  );
}

export default JobsContainer;