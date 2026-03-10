import {useQuery} from "@tanstack/react-query";
import { api } from "../api/categories";
import type { category } from "../model/categoriesModel";

export const query = {

    server: {
    category: {
        get: () => {
            return useQuery<category[]>({
                queryKey: ['category'],
                staleTime: 1000 * 60 * 5,
                queryFn: () => api.category.get(), 
            });
        }
    }
}
}
