import React from 'react';
import './App.css';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import Workspace from './components/pages/WorkspacePage/Workspace.component';

import FirebaseProvider from './context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      {/* <header className="App-header"> */}
        {/* <LoginPage/> */}
        <Workspace />
      {/* </header> */}
    </FirebaseProvider>
  );
}

export default App;
