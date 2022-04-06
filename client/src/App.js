import React from 'react';
import './App.css';
import { Footer } from './components/layout/Footer/Footer.jsx';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import Workspace from './components/pages/WorkspacePage/Workspace.component';
import FirebaseProvider from './context/FirebaseContext';


function App() {
  return (
<<<<<<< HEAD
    <>
    <FirebaseProvider>
        <Workspace />
        <LoginPage />
      </FirebaseProvider>
      <Footer />
      
    </>
=======
        <Workspace />
    // <FirebaseProvider>
    //     <LoginPage />
    //     <Footer />
    // </FirebaseProvider>
>>>>>>> 2955b8a2cb7d6b35e17f234d20cabc80b32cc33c
  );
}

export default App;
