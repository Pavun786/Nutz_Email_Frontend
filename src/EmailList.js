import {useState,useEffect} from "react";
import axios from "axios";
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function EmailList({data,setData}) {

    const[email,setEmail]=useState([])
        const [isLoading, setLoading] = useState(false);
    
       useEffect(()=>{
         loadData()
       },[])
    
       let loadData=async()=>{
          
          setLoading(true);
    
          await fetch("https://nutz-email-backend-bice.vercel.app/emails",{
            method:"GET"
          })
          .then((data)=>data.json())
          .then((info)=> setEmail(info))
    
           setLoading(false);
           
      }
      
    
      const inboxView =(email)=>{
        setData(email);
        console.log(email)
      }
  return (
    <>
         <a className="refresh"
          href="/list"
          >
            <Button  variant="contained">Refresh{" "}</Button>
         </a>
        
         {isLoading ? (
        
                <span className="loading">Loading...<img className="loadimage" src="https://usagif.com/wp-content/uploads/loading-29.gif"/></span>
        
              ) :( <table class="table">
              <thead>
                  <tr>
                      <th>ID</th>
                       <th>sender</th>
                       <th>receiver</th>
                       <th>subject</th>
                       <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                 
              {email.map((email,index)=>{
                   return <tr key={index}>

                       <td>{email.id}</td>
                       <td>{email.from}</td>
                       <td>{email.to}</td>
                       <td>{email.subject}</td>
                       <td>{email.date}</td>
                      

                       <td>
                               <Link to="/view">
                               
                               <Button onClick={()=>inboxView(email)} variant="contained">View</Button>
                              
                               </Link> 
                               
                            </td>
                   </tr>
              })}  
              </tbody>
            </table>
         
         )}
    
    </>
  )
}

export default EmailList;

