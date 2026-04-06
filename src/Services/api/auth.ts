import axios from "axios";
import type { Me, User } from "../model/authModel";
const url = "http://localhost:8000/api/user/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";
export const api =
{
    login: async function login(user: User): Promise<User> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const res = await axios.post(url + "login", user);
        return await res.data;
    },
    logout: async function logout(): Promise<void> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        const res = await axios.post(url + "logout");
        return await res.data;
    },

    me: async function me(): Promise<Me> {
        axios.defaults.withCredentials = true;
        axios.defaults.withXSRFToken = true;
        await axios.get(csrf);
        try {
            const res = await axios.get(url + "me");
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status ?? 0;
                const err = new Error(error.message) as Error & { status: number };
                err.status = status;
                throw err;
            }
            throw error;
        }
    }
}