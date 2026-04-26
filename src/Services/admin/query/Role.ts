import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Role, RoleResponse } from "../model/roleModel";
import { api } from "../api/roles";


export const query = {

 server: {
    get:  () => {
      return  useInfiniteQuery<RoleResponse>({
                      queryKey: ['roles'],
                      staleTime: 1000 * 60 * 5,
                      initialPageParam: 1,
                      queryFn: ({ pageParam }) => api.role.get(String(pageParam)), 
                      getNextPageParam: (lastPage) => {
                          if (lastPage.current_page < lastPage.last_page) {
                              return lastPage.current_page + 1;
                          }
                          return undefined;
                      }
      });
    },
    post: () => {
      return useMutation<unknown,AxiosError<{message:string | undefined}>,Role>(
        {mutationFn: (role:Role) => api.role.post(role)});
    }
 }

}
