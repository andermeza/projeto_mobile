import React, {UseState, CreateContext} from 'react';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(){

    return (
        <AuthContext.Provider value={{}}>

        </AuthContext.Provider>AuthContext.Provider
}