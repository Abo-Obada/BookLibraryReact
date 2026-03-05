export type User = {
    email: string
    password: string
}

export type LoginResponse = {
    token: string
    user: {
        id: number
        email: string
        name: string
    }
}

export type Me = {
    username: string,
    email:string
}
