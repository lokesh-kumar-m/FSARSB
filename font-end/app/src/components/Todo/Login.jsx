import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "./auth";

const Login=()=>{

    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState("")
    const navigateTo=useNavigate();
    const authContext=useAuth()

    function handleClick(){
        if(authContext.islogin(name,password)){
           setMessage("Login SucessFul")
           navigateTo(`/welcome/${name}`)
        }
        else{
            setMessage("Please check your Credentials") 
        }
    }

    return(
        <div className="login">
            <h2 className="message">{message}</h2>
            <div className="loginForm">
                <div className="name">
                    <label>User Name</label>
                    <input type="text" 
                    placeholder="Enter your name" 
                    onChange={e=>setName(e.target.value)}
                    value={name}
                    />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter your password"
                    onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <button type="" onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login;