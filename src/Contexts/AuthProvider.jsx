import React from 'react';
import { AuthContexts } from './AuthContexts';



const AuthProvider = ({ children }) => {

    const userInfo = {
        email : 'hurayrakhan@gmail.com'
    }

    return (
        <AuthContexts value={userInfo}>
             {children}
        </AuthContexts>
    );
};

export default AuthProvider;