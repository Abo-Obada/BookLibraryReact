import axios from "axios";
import type { LoginResponse, meResponse } from "../model/authAdminModel";

const url = import.meta.env.VITE_API_ADMIN_URL;
const csrf = import.meta.env.VITE_CSRF_URL;


export const api =
{
    me: async function me() : Promise<meResponse>{
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const response = await axios.get<meResponse>(url + "me");
        const status = response.status;
        const items:meResponse = {user: response.data.user, 
            status: status, 
            role: response.data.role};
        return items;
    },

    login: async function login(res:LoginResponse) {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
         await axios.get(csrf);
         const response = await axios.post(url + "login",res);
         return response.data;
    }
}