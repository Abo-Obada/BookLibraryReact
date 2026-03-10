export type category = {
    uuid:string
    category_name:string,
}

export type categoryResponse = { 
    last_page:string, 
    current_page:string
    category:category[]
}