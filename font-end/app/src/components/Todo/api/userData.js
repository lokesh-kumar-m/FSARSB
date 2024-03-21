import { apiContext } from "./apiCofig"


export const UserData=()=>apiContext.get("/hello-world")

export const UserHello=(name)=>apiContext.get(`/hello-world/path-variable/${name}`,{
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization":'Basic QWRtaW46ZHVtbXk='
    }
})

export const BasicAuthentication=(token)=>apiContext.get(`/basicauth`,{
    headers:{  
        'Authorization':token
    }
})