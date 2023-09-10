import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };

    // const logout = () => {
    //     // Implement your logout logic here
    //     setUser(null);
    // };

    const signin = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
        })
        return ()=>{
            unsub();
        }
    }, []);

    const value = {
        user,
        // login,
        // logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
