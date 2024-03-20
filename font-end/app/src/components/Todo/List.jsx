import { useEffect, useState } from "react"
import { UserList,DeleteUser } from "./api/todoapiservice"
import { useAuth } from "./auth"
import { useNavigate } from "react-router-dom"

const ListComp=()=>{

    //const lst=[{}];
    const authContext=useAuth()
    const [lst,setlst]=useState([])
    const [status,setStatus]=useState(false)
    const [message,setMessage]=useState("")
    const navigate=useNavigate()

    useEffect(
        ()=>callApi(),[]
    )

    function callApi(){
        UserList(authContext.username).then(
            (response)=>setList(response)
        )
        .catch(
            (error)=>errorMess(error)
        )
    }

    function setList(response){
        setlst(response.data)       
    }
    function errorMess(error){
        console.log(error)
    }

    function handleDelete(id){
        DeleteUser(authContext.username,id).then(
            ()=>{
                callApi()
                setStatus(true)
                setMessage(`The list with ${id} deleted`)
        }
        ).catch(
            (error)=>console.log(error.message)
        )
    }
    function handleUpdate(id){
        navigate(`/update/${id}`)
    }
    function handleback(name){
        navigate(`/welcome/${name}`)
    }

    function handleadd(){
        navigate(`/update/-1`)
    }

    return(
        <div>
            <div className="welcome">
                <div><h1>List of Things </h1></div>
                {status&&<div><p>{message}</p></div>}
                <table>
                    <thead>
                        <tr>
                            <th>desc</th>
                            <th>done</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                         {lst.map((element,i)=>(
                            <tr key={i}>
                                <td>{element.description}</td>
                                <td>{element.done.toString()}</td>
                                <td>{element.targetDate}</td>
                                <td>
                                    <button onClick={()=>handleDelete(element.id)}>delete</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleUpdate(element.id)}>Update</button>
                                </td>
                            </tr>
                        ))}     
                            
                    </tbody>                    
                </table>
            </div>
            <div>
                <button onClick={()=>handleback(authContext.username)}>back</button>
                <button onClick={()=>handleadd()}>Add</button>
            </div>
        </div>
        
    )
}

export default ListComp