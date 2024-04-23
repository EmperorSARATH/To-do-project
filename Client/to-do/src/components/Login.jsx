import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login =  () =>{

    const [input,setInput] = useState({
        username:"",
        password:"",
    })
    
    console.log(input);
    const [err,setErr] = useState(null);


    


    const navigate = useNavigate();


    const handleChange = e =>{
        setInput(prev=> ({...prev, [e.target.name] : e.target.value }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(input.username != "" && input.password !="" ){
            try{
             
             await fetch('http://localhost:8080/login',{
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify(input)
                 }).then((res)=>{
                     console.log(res);
                     if(res.status===404){
                         alert("User does not exist. Do register a user and login");
                         
                     }else{
                         navigate("/home");
                     }
                 })
            } catch(err){
             setErr(err.response.data);
            }

        }else{
            alert("Enter username and password before clicking login button");
        }

        
    }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form className='form-main'>
                <label className='label'>Username</label>
                <input required type="text" placeholder='username' name='username' onChange={handleChange}/><br/>
                <label className='label'>Password</label>
                <input  required type="password" placeholder='password'name='password' onChange={handleChange}/><br/>
                <button className='btn-login' onClick={handleSubmit}>Login</button>
                { err && <p>{err}</p>}
                <span>Don't you have an account?<Link to="/">Register</Link></span>
            </form>
           
        </div>
    )
}
export default Login;