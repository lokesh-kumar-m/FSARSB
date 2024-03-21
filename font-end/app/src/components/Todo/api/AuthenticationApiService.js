import { apiContext } from "./apiCofig"
export const BasicAuthentication=(token)=>apiContext.get(`/basicauth`,{
    headers:{  
        'Authorization':token
    }
})

export const JWTAuthentication=(username,password)=>apiContext.post(`/authenticate`,{username,password})