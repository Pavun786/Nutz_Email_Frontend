import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

 function ViewEmail({data,setData}){

    const navigate= useNavigate()

    return(
        <>

<Button  variant="contained" style={{width:"100px", margin:"20px"}}
        onClick={()=> navigate(-1)}
        className="btn btn-sm btn-success mr-6"
        >
         Back
        </Button>
        
      <div className="viewEmail">

       
        

         <img className="viewimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOKWxdW8wyji3KNo1i_9AcDu6L8K2NLw6JQ&usqp=CAU"/>
          

            <div className="viewdetails">
            <h4>Id: {data.id}</h4>
            <h4>From: {data.from}</h4>
            <h4>To: {data.to}</h4>
            <h4>Subject: {data.subject}</h4>
            <h4>Date: {data.date}</h4>
            <p>Detail: {data.text}</p>
            </div>
        </div>
        </>
    )
 }
 export default ViewEmail;