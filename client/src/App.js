import React from 'react';
import './App.css';
import { Footer } from './components/layout/Footer/Footer.jsx';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import FirebaseProvider from './context/FirebaseContext';
import Companys_Page from './components/companies-page-component/Companies_page';

function App() {
  return (
    <>
      <FirebaseProvider>
        <LoginPage />
      </FirebaseProvider>
      <Footer />
      <Companys_Page/>
    </>
  );
}

export default App;
