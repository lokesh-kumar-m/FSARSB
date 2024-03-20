import axios from "axios";


const apicalls=axios.create({
    baseURL: 'http://localhost:8082'
})

export const UserData=()=>apicalls.get("/hello-world")

export const UserHello=(name)=>apicalls.get(`/hello-world/path-variable/${name}`)