import axios from "axios";

export function getuserData(){
    return axios.get("http://localhost/users/jpa")
}
export const UserData=()=>{axios.get("http://localhost:8082")}