import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Role, RoleResponse } from "../model/roleModel";
import { api } from "../api/roles";


export const query = {

 server: {
    get: (page: number) => {
    return useQuery<RoleResponse>({
        queryKey: ['roles', page],
        staleTime: 1000 * 60 * 5,
        queryFn: () => api.role.get(String(page)),
    });
},

    post: () => {
      return useMutation<unknown,AxiosError<{message:string | undefined}>,Role>(
        {mutationFn: (role:Role) => api.role.post(role)});
    }
 }

}
