import axios from "axios";

export const apiContext=axios.create(
    {
        baseURL:'http://localhost:8082'
    }
)

export const UserList=(name)=>apiContext.get(`users/${name}/list`,{
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:'Basic QWRtaW46ZHVtbXk='
    }
})

export const DeleteUser=(name,id)=>apiContext.delete(`users/${name}/list/${id}`)

export const getUserDetails=(name,id)=>apiContext.get(`/users/${name}/list/${id}`)

export const updateUserData=(name,id,todo)=>apiContext.put(`/users/${name}/list/${id}`,todo)

export const addUser=(name,todo)=>apiContext.post(`/users/${name}`,todo)