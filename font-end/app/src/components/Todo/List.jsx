import axios from "axios"
import { useState } from "react"
import { UserData } from "./api/userapi"

const ListComp=()=>{

    const [lst,setlst]=useState([{}])
    axios.get("http://localhost:8082/users/jpa").then(
        (response)=>setList(response)
    )
    .catch(
        (error)=>errorMess(error)
    )

    function setList(response){
        setlst(response.data)        
    }
    function errorMess(error){
        console.log(error)
    }

    return(
        <div>
            <div className="welcome">
                <div><h1>List of Things </h1></div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>desc</th>
                        </tr>
                    </thead>
                    <tbody>
                         {lst.map((element,i)=>(
                            <tr key={i}>
                                <td>{element.id}</td>
                                <td>{element.PersonName}</td>
                            </tr>
                        ))}     
                            
                    </tbody>                    
                </table>
            </div>
        </div>
        
    )
}

export default ListComp