import React from 'react';
import './App.css';
import { Footer } from './components/layout/Footer/Footer.jsx';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import Workspace from './components/pages/WorkspacePage/Workspace.component';
import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
        <Workspace />
    // <FirebaseProvider>
    //     <LoginPage />
    //     <Footer />
    // </FirebaseProvider>
  );
}

export default App;
