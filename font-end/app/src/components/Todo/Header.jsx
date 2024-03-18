import {Link} from "react-router-dom"
import { useAuth } from "./auth";

const Header=()=>{

    const authContext=useAuth()

    function handlelogout(){
        authContext.islogout()
    }
    return(
        <div className="header">
            <h3>Header</h3>
            <h4 >List</h4>
            {authContext.isAuthentic 
            && <Link to="/logout" onClick={handlelogout}>logout</Link>
            }

            {!authContext.isAuthentic&&<Link to="/login" >login</Link>}
        </div>
    );
}

export default Header