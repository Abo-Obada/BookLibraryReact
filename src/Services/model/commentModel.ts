export type Comment = {
    comment: string;
      uuid: string;
      edited: string;
      rate: string;
      updated_at: string;
      get_reaction_count_per_comment: Reaction[] | undefined;
      comment_owner: User | undefined
}

export type Reaction = {
uuid:string,
reaction:string
user : User
}

export type CommentResponse = {
    data: Comment[];
    current_page : string;
    last_page: string; 
    total: string | number
    to: number
}

export type User = {
    uuid: string
    username:string
}

export type CommentPost = {
    comment: string | undefined
    rate: number | undefined
    uuid: string | undefined
}
