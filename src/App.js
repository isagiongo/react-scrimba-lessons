import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import { directive } from '@babel/types';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
