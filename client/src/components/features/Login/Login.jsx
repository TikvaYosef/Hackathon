import React, { useContext } from 'react';
import { FirebaseContext } from '../../../context/FirebaseContext';
import firebase from 'firebase/compat/app';
import Logout from '../Logout/Logout';
import "firebase/compat/auth";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Login.css"

export default function Login() {
    const { auth, user } = useContext(FirebaseContext);

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider);
    }

    setInterval(() => {
        if(user) localStorage.setItem('userName', user.displayName);
    }, 60000)
    return (
        <Stack direction="row" spacing={2}>
            {user ? <Logout /> :
                <Button onClick = {googleLogin} variant="outlined" color="error" className='loginbtn'>
                    Login with google
                </Button>
                
            }
        </Stack>
       
    );
}
