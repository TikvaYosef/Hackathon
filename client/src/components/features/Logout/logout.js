import React, { useContext } from 'react'
import { FirebaseContext } from '../../../context/FirebaseContext';
import "../../pages/LoginPage/LoginPage.css";
import LogoutIcon from '@mui/icons-material/Logout';


export default function Logout() {
    const { auth } = useContext(FirebaseContext);

    return (
        <>
            <h1 className='title'>
                Welcome To I WORK OS
            </h1>
            
            <LogoutIcon className='LogOutBtn' onClick={() => auth.signOut()}  >
            </LogoutIcon>
        </>
    )
}
