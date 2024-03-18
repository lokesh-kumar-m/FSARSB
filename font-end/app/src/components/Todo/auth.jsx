import { createContext, useContext, useState } from "react";

export const AuthContext=createContext() 

export const useAuth=()=>useContext(AuthContext)



const Auth=({children})=>{
    const [isAuthentic,setAuthentic]=useState(false)
    
    function islogin(name,password){
        if(name==="admin"&&password==="dummy"){
            setAuthentic(true)
            return true 
        }
        else{
            setAuthentic(false) 
            return false
        }
    }

    function islogout(){
        setAuthentic(false) 
    }

    return(
        <AuthContext.Provider value={ {isAuthentic,islogin,islogout} }>
            {children}
        </AuthContext.Provider>
    );
}

export default Auth