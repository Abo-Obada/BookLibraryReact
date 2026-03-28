import {useMutation } from "@tanstack/react-query";
import { api } from "../api/reactions";
import type { ReactionPost } from "../model/reactionModel";


export const query = {

    server: {
    reaction: {
        update: ( comment:ReactionPost) => {
          return useMutation({mutationFn: () => api.reactions.update(comment)});
        }
    },
}
}
