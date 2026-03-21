import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { api } from "../api/books";
import type { BookContentResponse, BookCoverResponse } from "../model/bookModel";
import type { Params } from "react-router-dom";

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
        },
        getCategoryBook: (category: string) => {
    return useInfiniteQuery<BookCoverResponse>({
        queryKey: ['category-book', category],
        staleTime: 1000 * 60 * 5,
        initialPageParam: 1,
        queryFn: ({ pageParam }) => api.bookCover.getCategorized(String(pageParam), category),
        getNextPageParam: (lastPage) => {
            if (lastPage.current_page < lastPage.last_page) {
                    return lastPage.current_page + 1;
            }
            return undefined;
        }
    });
}
    },
   bookContent: {
    get: (uuid:string | undefined) => {
                return useQuery<BookContentResponse>({
                    queryKey: ['book-content',uuid],
                    staleTime: 1000 * 60 * 5,
                    queryFn: () => api.bookContent.get(uuid), 
                });
            }
   }
}
}
