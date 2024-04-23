import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import "./Register.css";


const Register =  () =>{

    const [input,setInput] = useState({
        username:"",
        email:"",
        password:"",
    })
    
   
    const [err,setErr] = useState(null);

    const navigate = useNavigate();
    const handleChange = e =>{
        setInput(prev=> ({...prev, [e.target.name] : e.target.value }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(input.username !="" && input.email!="" && input.password!=""){
            await fetch('http://localhost:8080/signup',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(input)
              
            }).then((res)=>{
                console.log(res);
            }).then(()=>{
                navigate("/login")
            }).catch((err)=>{
                setErr(err.response.data);
            })

        }else{
            alert("Complete all field details !");
        }
      
       
            
    }
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form className='form-main'>
                <label className='label'>Username</label>
                <input required type="text" placeholder='username' name='username' onChange={handleChange}/><br/>
                <label className='label'>Password</label>
                <input required type="password" placeholder='password' name='password' onChange={handleChange}/><br/>
                <label className='label'>E-mail</label>
                <input required type="email" placeholder='email' name='email' onChange={handleChange}/><br/>
                <button onClick={handleSubmit} className='btn-register'>Register</button>
               { err && <p>{err}</p>}
                <span>Already have an account?<Link to="/login">Login</Link></span>
            </form>
           
        </div>
    )
}
export default Register;