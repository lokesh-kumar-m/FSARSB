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

    async function islogin(name,password){

        const baToken= "Basic "+ window.btoa(name +":"+ password)
        console.log("tkn:"+baToken)
        try{
            const response= await BasicAuthentication(baToken)
        
            if(response.status==200){
                setAuthentic(true)
                setUsername(name)
                return true 
            }
            else{
                setAuthentic(false) 
                return false
            }
        }catch(error){
            console.log(error)
        }
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