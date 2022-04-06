import React, { useContext } from 'react'
import { FirebaseContext } from '../../../context/FirebaseContext';
import "./Logout.css";
import LogoutIcon from '@mui/icons-material/Logout';


export default function Logout() {
    const { auth } = useContext(FirebaseContext);

    const handleSignOut = () => {
        auth.signOut();
        localStorage.clear();
    }
    return (
        <div>
            <div className='aboutContainer'>
                <h1 className='title'>
                    Welcome To I WORK OS
                </h1>
                <p className='aboutpara'>
                    I-Work-Os is an Israeli website where current and former employees review companies.<br /> I-Work-Os also allows users to submit and view salaries <br />as well as search and apply for jobs on its platform.
                </p>
            </div>
            <LogoutIcon className='LogOutBtn' onClick={handleSignOut}  >
            </LogoutIcon>
        </div>
    )
}
