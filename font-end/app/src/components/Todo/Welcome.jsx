import {Link,useParams} from "react-router-dom"
import { useAuth } from "./auth"

const Welcome=()=>{
    const {username}=useParams()
    const authContext=useAuth()
    return(
        <div className="welcome">
            <h1>Welcome</h1><br />
            <h2>{username}</h2> <br />
            {authContext.isAuthentic
            &&<Link to="/list">find list</Link>
            }
        </div>
    )
}

export default Welcome;