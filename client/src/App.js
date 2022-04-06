import React from 'react';
import './App.css';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import FirebaseProvider from './context/FirebaseContext';
import AppRouter from './App-Router' 


function App() {
  return (
      <FirebaseProvider>
        {/* <LoginPage /> */}
        <AppRouter />
      </FirebaseProvider>
  );
}

export default App;
