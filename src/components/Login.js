
import React from "react";
import { Link } from "react-router-dom";

function Login(){
    console.log("hello")
    return(

    
    <div className="sty">
         <input type='text' placeholder='UserId' required/> 
         <br/>
         <input type='text' placeholder='Password' required/> 
         <br/>
         <Link to="/Todo"> Login</Link>
    </div>
    );
  
}

export default Login;