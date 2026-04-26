export type Role = {
    id:string
    name:string
}

export type RoleResponse =
{
    data : Role[], 
    "current_page": number,
    "first_page_url": string,
    "from": number,
    "last_page": number,
    "last_page_url": number,
    "links": [
        {
            "url": string,
            "label": string,
            "active": boolean
        },
       
    ],
    "next_page_url":string,
    "path":string,
    "per_page": number,
    "prev_page_url": null,
    "to": number,
    "total": number
}