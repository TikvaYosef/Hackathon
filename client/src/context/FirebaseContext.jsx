import React, { createContext, useState, useEffect } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'


firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();

export const FirebaseContext = createContext(firebaseAuth)

const FirebaseProvider = ({ children }) => {
    const [user] = useAuthState(firebaseAuth);
    const [auth, setAuth] = useState(null);
    useEffect(() => {
        setAuth(firebaseAuth)
    }, [])

    return (
        <FirebaseContext.Provider value={{ user, auth }}>
            {children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseProvider;