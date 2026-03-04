import axios from "axios";
import type { User } from "../model/authModel";
const url = "http://localhost:8000/api/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";
export const api =
{
    login: async function login(user: User) {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        return await axios.post(url + "login", user);
    },
}