import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/auth";
import { type LoginResponse, type User } from "../model/authModel";

export const query = {

    server: {
        login: () => {
            const queryLogin = useQueryClient();
            return useMutation<LoginResponse, Error, User>({
                mutationFn: (payload) => api.login(payload).then(res => res.data),

                onSuccess: () => {
                    queryLogin.invalidateQueries({ queryKey: ['user'] });
                },

                onError: (error) => {
                    console.log("An error occurs " + error)
                }
            })
        }
    }

}
