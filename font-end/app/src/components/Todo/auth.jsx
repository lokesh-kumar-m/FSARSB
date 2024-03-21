import { createContext, useContext, useState } from "react";
import {JWTAuthentication} from './api/AuthenticationApiService'
import { apiContext } from "./api/apiCofig";

export const AuthContext=createContext() 
export const useAuth=()=>useContext(AuthContext)



const Auth=({children})=>{
    const [isAuthentic,setAuthentic]=useState(false)
    const [username,setUsername]=useState("")
    const [authToken,setToken]=useState('')
    
    // async function islogin(name,password){

    //     const baToken= "Basic "+ window.btoa(name +":"+ password)
    //     setToken(baToken)
    //     try{
    //         const response= await BasicAuthentication(baToken)
        
    //         if(response.status==200){
    //             setAuthentic(true)
    //             setUsername(name)
    //             apiContext.interceptors.request.use(
    //                 (config)=>{
    //                     config.headers.Authorization=baToken
    //                     return config
    //                 }
    //             )
    //             return true 
    //         }
    //         else{
    //             setToken('')
    //             setAuthentic(false) 
    //             return false
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    async function islogin(name,password){

        
        
        try{
            const response= await JWTAuthentication(name,password)
        
            if(response.status==200){
                const JwtToken='Bearer '+response.data.token
                setAuthentic(true)
                setUsername(name)
                setToken(JwtToken)
                apiContext.interceptors.request.use(
                    (config)=>{
                        config.headers.Authorization=JwtToken
                        return config
                    }
                )
                return true 
            }
            else{
                setToken('')
                setAuthentic(false) 
                return false
            }
        }catch(error){
            console.log(error)
        }
    }


    function islogout(){
        setToken('')
        setAuthentic(false) 
    }

    return(
        <AuthContext.Provider value={ {isAuthentic,islogin,islogout,username,authToken} }>
            {children}
        </AuthContext.Provider>
    );
}

export default Auth