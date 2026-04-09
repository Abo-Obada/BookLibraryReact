import axios from "axios";
import type { Role } from "../model/roleModel";
const url = "http://localhost:8000/api/admin/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";


export const api =
{
    role: 
    {
        get: async function get() : Promise<Role> 
        {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
         await axios.get(csrf);
         const response = await axios.get(url + "getrole");
         return response.data;
    }
    ,
    post: async function post(res:Role){
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
         await axios.get(csrf);
         const response = await axios.post(url + "storerole",res);
         return response.data;
    }
}
}