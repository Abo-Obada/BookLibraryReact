import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../api/auth";
import { AxiosError } from "axios";
import type { LoginResponse, meResponse } from "../model/authAdminModel";


export const query = {

 server: {
    me:  () => {
      return  useQuery<unknown,AxiosError,meResponse>({
        queryKey:["me-admin"],
        queryFn: api.me,
        staleTime: 1000 * 60 * 5,
        retry: false,
    });
    },
    login: () => {
      return useMutation<unknown,AxiosError<{message:string | undefined}>,LoginResponse>(
        {mutationFn: (login:LoginResponse) => api.login(login)});
    }
 }

}
