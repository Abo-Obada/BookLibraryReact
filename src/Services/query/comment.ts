import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { api } from "../api/comments";
import type { CommentPost, CommentResponse } from "../model/commentModel";

export const query = {

    server: {
    comment: {
        get: (uuid:string | undefined) => {
            return useInfiniteQuery<CommentResponse>({
                queryKey: ['comments',uuid],
                staleTime: 1000 * 60 * 5,
                initialPageParam: 1,
                queryFn: ({ pageParam }) => api.comments.get(String(pageParam),uuid), 
                getNextPageParam: (lastPage) => {
                    if (lastPage.current_page < lastPage.last_page) {
                        return lastPage.current_page + 1;
                    }
                    return undefined;
                }
            });
        },
        post: () => {
          return useMutation({mutationFn: (comment:CommentPost) => api.comments.post(comment)});
        }
    },
}
}
