import React from 'react';
import './App.css';
import { LoginPage } from './components/pages/LoginPage/LoginPage';

import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      <header className="App-header">
        <LoginPage/>

      </header>
    </FirebaseProvider>
  );
}

export default App;
