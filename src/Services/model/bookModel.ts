export type BookCover = {
    uuid: string;
    book_name: string;
    book_image: string;
    book_rate: number;
    book_page_number: number;
    created_at?: Date | string;
    book_description: string;
    views: number;
    author_name: "string";
   };

export type BookCoverResponse = {
    data: BookCover[];
    current_page: number,
    last_page: number
    total:number
}

export type BookContentResponse = {
    uuid: string, 
    created_at : string, 
    updated_at: string,
    get_book : Book
    get_book_author : BookAuthor
    get_book_content: BookContent[]
}

export type BookContent = {
    uuid:string,
    label:string,
    value:string
}

export type Book = {
     uuid: string;
    book_name: string;
    book_image: string;
    book_rate: number;
    book_page_number: number;
    created_at?: Date | string;
    book_description: string;
    views: number;
}

export type BookAuthor = {
author_name :string,
author_uuid: string
}