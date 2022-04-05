import React, { useContext } from 'react';
import { FirebaseContext } from '../../../context/FirebaseContext';
import firebase from 'firebase/compat/app';
import Logout from '../Logout/logout';
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
    return (
        <Stack direction="row" spacing={2}>
            {user ? <Logout /> :
                <Button variant="outlined" color="error" className='loginbtn'>
                    Login with google
                </Button>
            }
        </Stack>
    );
}
