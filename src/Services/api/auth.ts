import axios from "axios";
import type { Me, User } from "../model/authModel";
const url = "http://localhost:8000/api/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";
export const api =
{
    login: async function login(user: User): Promise<User> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const res =  await axios.post(url + "login", user);
        return await res.data;
    },
    logout: async function logout(): Promise<void> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const res =  await axios.post(url + "logout");
        return await res.data;
    },

    me: async function me(): Promise<Me> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const res =  await axios.get(url + "me");
        return await res.data;
    }
}