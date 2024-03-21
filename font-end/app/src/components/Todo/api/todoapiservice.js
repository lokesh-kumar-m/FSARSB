import { apiContext } from "./apiCofig"

export const UserList=(name)=>apiContext.get(`users/${name}/list`)

export const DeleteUser=(name,id)=>apiContext.delete(`users/${name}/list/${id}`)

export const getUserDetails=(name,id)=>apiContext.get(`/users/${name}/list/${id}`)

export const updateUserData=(name,id,todo)=>apiContext.put(`/users/${name}/list/${id}`,todo)

export const addUser=(name,todo)=>apiContext.post(`/users/${name}`,todo)