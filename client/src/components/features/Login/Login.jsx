import React, { useContext } from 'react';
import { FirebaseContext } from '../../../context/FirebaseContext';
import firebase from 'firebase/compat/app';
import Logout from '../Logout/logout';
import "firebase/compat/auth"


export default function Login() {
    const { auth, user } = useContext(FirebaseContext);

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider);
    }

    return (
        <div>

            {user? <Logout /> :
            <button onClick={googleLogin}> Login  </button>         
        }
        </div>

    )
}
