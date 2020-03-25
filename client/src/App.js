import React from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { AddDish } from './components/dish/AddDish';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <AddDish/>
      </div>
    </div>
  );
}

export default App;
