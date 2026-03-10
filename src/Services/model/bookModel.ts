export type BookCover = {
     uuid: string;
    book_name: string;
    book_image: string;
    book_rate: number;
    book_page_number: number;
    created_at?: Date | string;
    book_description: string;
    views: number;
   };

export type BookCoverResponse = {
    data: BookCover[];
    current_page: number,
    last_page: number
    total:number
}