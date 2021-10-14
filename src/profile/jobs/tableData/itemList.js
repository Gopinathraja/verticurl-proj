import React, { useEffect, useState,useContext } from 'react';
import './itemList.scss';
import down_icon from '../../../images/down_icon.png';
import EditJob from '../crudAction/editJob'
import HideJob from '../crudAction/hideJob';
import DeleteJob from '../crudAction/deleteJob';

const thead= {title:"Job Title",status:"Status",posted:"Posted",applicants:"Applicants",options:"Options"};
const options= ["Edit","Delete","Hide"];



function ListTable(props) {

  const tableRow = (data) => {
        return(
          <tr className={(data.status === "Hide")? "t-row hidden" : "t-row "}>
            {
            data && Object.keys(data).map(function(detail, id) {
              if(id ===3){
                return renderImgs(data[detail]);
              }
              if(id !== 4 || data[detail] === "Options"){
                const text = (Number(data[detail]) === data[detail] && id===2)? (new Date(data[detail])).toString() :  data[detail];
                return <td key={id}>{ text }</td>;
              }
              return OptionsEle(data); 
            })
            }
            {/* {data.map((name,ind) => (
              <td key={`${name}-${ind}`}>{name}</td>
            ))} */}
          </tr>
        )
      }
      
  const OptionsEle = (job)=>{
        return (<td className="td_options"> <span className="moreOption">...</span>
          <ul>
            <img src={down_icon} alt="down-arr"></img>
          {options.map((name,ind) => (
           <li key={`${name}-${ind}`}> 
              {(name === "Edit") ? <EditJob action= { () => props.editJobs(job)}></EditJob> :
              (name === "Delete") ? <DeleteJob actionData= {job.id} triggerChange ={ props.triggerChange()}></DeleteJob> :
              (name === "Hide") ?<HideJob actionData= {job} triggerChange={props.triggerChange()}></HideJob>:null}

              {/* <button onClick={()=> {
              if(name === "Edit") { return props.editJobs(job) }else{ if(name === "Delete"){deleteJobs(job.id) }else{
                    job.status = "Hide";updateJobs(job);
                  }
                }
              }} > <img src={down_icon} alt="down-arr"></img> {name}{job.id}</button> */}

            </li>
          ))}
          </ul>
          </td>
        )
      }

      const renderImgs = (detail)=>{
        if(!detail) return null;
        if(detail === "Applicants") return (<td key={`detail 3`}>{ detail }</td>);
        const myArr = (typeof detail === 'string') ? detail.split(",") : detail;
        const getapllicants = (myArr.length === 0) ? " " : imageList(myArr);
        return (<td key={`detail 3`}>{getapllicants} <span> { myArr.length }</span></td>);
      }
      const imageList = (arr)=> {
          return arr.map((url)=>{
            return <img src={url} className="img-applicant" alt="" />
          })
      }
  return (
    <div className="itemTable">
     <table>
       <thead>
         {tableRow(thead)}
       </thead>
       <tbody>
        {props && props.list && props.list.map((row) => (
         tableRow(row)
        ))}
       </tbody>
     </table>
    </div>
  );
}

export default ListTable;