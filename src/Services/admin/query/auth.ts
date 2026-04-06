import { useQuery } from "@tanstack/react-query";
import { api } from "../api/auth";
import type { meResponse } from "../model/authAdminModel";

export const query = {

 server: {
    me:  () => useQuery<meResponse | undefined>({
        queryKey:["me-admin"],
        queryFn: async () => await api.me(),
        staleTime: 1000 * 60 * 5,
        retry: false,
    })
 }

}
