export interface User {
    id: string;
    username: string
}

export interface UserSchema {
    user: User | undefined;
}