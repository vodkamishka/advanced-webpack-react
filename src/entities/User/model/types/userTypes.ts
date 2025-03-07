export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData: User | undefined;
    isInit?: boolean;
}