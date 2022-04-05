import React from 'react';
import './App.css';
import { Footer } from './components/layout/Footer/Footer';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
        <LoginPage />
        <Footer />
    </FirebaseProvider>
  );
}

export default App;
