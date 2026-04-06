
export type LoginResponse = {
        email: string | undefined,
        password: string | undefined,
        remember: boolean ,
}

export type Me = {
    
    username: string,
    email: string,
    uuid: string,
}

export type meResponse = {
    user: Me
    role:string
    status:string | number
}