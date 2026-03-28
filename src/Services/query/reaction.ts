import {useMutation } from "@tanstack/react-query";
import { api } from "../api/reactions";
import type { ReactionPost } from "../model/reactionModel";


export const query = {

    server: {
    reaction: {
        update: () => {
          return useMutation({mutationFn: (comment:ReactionPost) => api.reactions.update(comment)});
        }
    },
}
}
