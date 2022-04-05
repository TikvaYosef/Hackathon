import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Logout from './components/Logout/logout';
import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      <header className="App-header">
        <Login />
        <Logout />
      </header>
    </FirebaseProvider>
  );
}

export default App;
