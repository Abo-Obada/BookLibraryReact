import { api } from "../api/auth";
import { type Me, type User } from "../model/authModel";

export const query = {

    server: {
        login: async (newLogin: User) => {
            const res = await api.login(newLogin);
            return res;
        },
        logout: async () => {
            const res = await api.logout();
            return res;
        },

        me: async () => {
            const res = await api.me();
            return res;
        }
    }

}
