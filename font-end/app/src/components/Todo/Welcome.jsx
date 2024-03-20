import {Link} from "react-router-dom"
import { useAuth } from "./auth"
import { UserHello } from "./api/userData"
import { useState } from "react"

const Welcome=()=>{
    const authContext=useAuth()
    const [message,setMess]=useState("")

    function getData(){
        UserHello("Kom").then(
        (response)=>responseBodyMessage(response)
    )
    .catch(
        (error)=>errorMessage(error)
    )
    .finally(
        ()=>console.log("hello")
    )
    }
    function responseBodyMessage(response){
        setMess(response.data.message)
        //console.log(response.data.message)
    }
    function errorMessage(error){
        console.log(error);
    }
    return(
        <div className="welcome">
            <h1>Welcome</h1><br />
            <h2>{authContext.username}</h2> <br />
            {authContext.isAuthentic
            &&<Link to="/list">find list</Link>
            }
            <div>
                <button onClick={getData}>
                    get greetings
                </button>
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}

export default Welcome;