
import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome"
import ListComp from "./List";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";
import Auth from "./auth";
import { useAuth } from "./auth";

function AuthenticatedRoutes({children}){
    const authContext=useAuth()
    if(authContext.isAuthentic)
        return children
    return <Navigate to='/'></Navigate>
}


const Todo=()=>{
    return(
        <div>
            <Auth>
            <BrowserRouter>
            <Header></Header>
            <hr />
            <h1>TodoApplication</h1>
                <Routes>
                    <Route path='/' element={<Login></Login>}/>
                    <Route path='/login' element={<Login></Login>}/>
                    <Route path='/welcome/:username'
                    element={
                        <AuthenticatedRoutes>
                            <Welcome></Welcome>
                        </AuthenticatedRoutes>   
                    }/>
                    <Route path='/list' element={
                        <AuthenticatedRoutes>   
                            <ListComp></ListComp>
                        </AuthenticatedRoutes>   
                    }/>
                    <Route path='/logout' element={
                        <AuthenticatedRoutes>   
                            <Logout></Logout>
                        </AuthenticatedRoutes>   
                    }/>

                    <Route path='*' element={<Error></Error>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
            </Auth>
        </div>
    );
}

export default Todo;











