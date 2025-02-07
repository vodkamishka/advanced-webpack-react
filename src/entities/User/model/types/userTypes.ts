export interface AuthData {
    id: string;
    username: string
}

export interface UserSchema {
    authData?: AuthData | undefined;
}