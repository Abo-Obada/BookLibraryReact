import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Role } from "../model/roleModel";
import { api } from "../api/roles";


export const query = {

 server: {
    get:  () => {
      return  useQuery<unknown,AxiosError,Role[]>({
        queryKey:["role"],
        queryFn: api.role.get,
        staleTime: 1000 * 60 * 5,
        retry: false,
    });
    },
    post: () => {
      return useMutation<unknown,AxiosError<{message:string | undefined}>,Role>(
        {mutationFn: (role:Role) => api.role.post(role)});
    }
 }

}
