export type BookDesc = {
  id: string|undefined
  bookName:string,
  bookAuthor:string,
  views:number,
  rating:number,
  imageLink:string,
  description:string,
}

export type BookCategory = { 
  id:string | undefined,
  categoryName?: string,
  authorName?: string
}


export type User = { 
  userId: number,
  id: number,
  title: string,
  completed: boolean
}