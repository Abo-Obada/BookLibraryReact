import axios from "axios";
import type { meResponse } from "../model/authAdminModel";

const url = "http://localhost:8000/api/admin/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";

export const api =
{
    me: async function me() : Promise<meResponse | undefined> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        return axios.get(url + "me");
    }
}