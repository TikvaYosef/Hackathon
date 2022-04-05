import React from 'react';
import './App.css';
import Login from './components/features/Login/Login';

import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      <header className="App-header">
        <Login />

      </header>
    </FirebaseProvider>
  );
}

export default App;
