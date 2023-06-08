import React, { useState } from "react";
// import { Link } from "react-router-dom";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";

function Login(){
 
    const[values, setValues]=useState({
        name:'',
        password:''
    })

    const [errors, setErrors]=useState({})
    const history=useNavigate()

    function handleChange(e){
        setValues({...values,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        
        e.preventDefault();
        console.log(validation(values));

        let result=validation(values);

        if(result && result.success ==  true){
            history("/Todo")
        }
        else{
        setErrors(result);
        }

    }

    return(
<div className="Wrap">
    <form className="from-2" onSubmit={handleSubmit}>
    <div className="sty">
        <label><b>User Name</b></label>
         <input type='text' placeholder='Enter Name' value={values.name} name="name" onChange={handleChange}/> 
         

         <label><b>Password</b></label>
         <input type='password' placeholder='Enter password' value={values.password} name="password" onChange={handleChange}/> 


           {(errors.name || errors.password) && (
             <p style={{ color: "red", fontSize: "12px" }}>
          {errors.name && `${errors.name} `}
          {errors.password && errors.password}
        </p>
      )}

      

         <button type="submit">Login</button>
        
         </div>
    </form>
    </div>
    );
  
}

export default Login;