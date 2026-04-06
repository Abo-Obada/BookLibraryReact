import { useQuery } from "@tanstack/react-query";
import { api } from "../api/auth";
import type { meResponse } from "../model/authAdminModel";

export const query = {

 server: {
    me:  () => {
      return  useQuery({
        queryKey:["me-admin"],
        queryFn: api.me,
        staleTime: 1000 * 60 * 5,
        retry: false,
    });
    }
 }

}
