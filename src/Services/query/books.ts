import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { api } from "../api/books";
import type { BookCoverResponse } from "../model/bookModel";

export const query = {

    server: {
    bookCover: {
        get: () => {
            return useInfiniteQuery<BookCoverResponse>({
                queryKey: ['book-cover-marquee'],
                staleTime: 1000 * 60 * 5,
                initialPageParam: 1,
                queryFn: ({ pageParam }) => api.bookCover.get(String(pageParam)), 
                getNextPageParam: (lastPage) => {
                    if (lastPage.current_page < lastPage.last_page) {
                        return lastPage.current_page + 1;
                    }
                    return undefined;
                }
            });
        }
        ,
        getAll: () => {
            return useInfiniteQuery<BookCoverResponse>({
                queryKey: ['book-cover-all'],
                staleTime: 1000 * 60 * 5,
                initialPageParam: 1,
                queryFn: ({ pageParam }) => api.bookCover.get(String(pageParam)), 
                getNextPageParam: (lastPage) => {
                    if (lastPage.current_page < lastPage.last_page) {
                        return lastPage.current_page + 1;
                    }
                    return undefined;
                }
            });
        }
    }
}
}


