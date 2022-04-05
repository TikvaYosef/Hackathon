import React, { useContext } from 'react'
import { FirebaseContext } from '../../context/FirebaseContext';


export default function Logout() {
    const { auth } = useContext(FirebaseContext);
    
    return (
        <div>
            <button onClick={() => auth.signOut()}> Logout  </button>
        </div>
    )
}
