import type { Author } from "../model/authorModel";
import { api } from "../api/authors";
import { useQuery } from "@tanstack/react-query";

export const query = {

    server: {
    author: {
        get: () => {
            return useQuery<Author[]>({
                queryKey: ['author'],
                staleTime: 1000 * 60 * 5,
                queryFn: () => api.author.get() 
            });
        }
    }
}
}