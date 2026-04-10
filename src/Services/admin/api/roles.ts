import axios from "axios";
import type { Role } from "../model/roleModel";
const url = import.meta.env.VITE_API_ADMIN_URL;
const csrf = import.meta.env.VITE_CSRF_URL;


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