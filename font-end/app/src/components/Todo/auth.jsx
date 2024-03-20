import { createContext, useContext, useState } from "react";
import {BasicAuthentication} from './api/userData'


export const AuthContext=createContext() 
export const useAuth=()=>useContext(AuthContext)



const Auth=({children})=>{
    const [isAuthentic,setAuthentic]=useState(false)
    const [username,setUsername]=useState("")
    
    // function islogin(name,password){
    //     if(name==="admin"&&password==="dummy"){
    //         setAuthentic(true)
    //         setUsername(name)
    //         return true 
    //     }
    //     else{
    //         setAuthentic(false) 
    //         return false
    //     }
    // }

    function islogin(name,password){

        const baToken= "Basic "+ window.btoa(name +":"+ password)
        BasicAuthentication(baToken).then((response)=>console.log("response")).catch((error)=>console.log(error))

        setAuthentic(false)
        // if(name==="admin"&&password==="dummy"){
        //     setAuthentic(true)
        //     setUsername(name)
        //     return true 
        // }
        // else{
        //     setAuthentic(false) 
        //     return false
        // }
    }

    function islogout(){
        setAuthentic(false) 
    }

    return(
        <AuthContext.Provider value={ {isAuthentic,islogin,islogout,username} }>
            {children}
        </AuthContext.Provider>
    );
}

export default Auth