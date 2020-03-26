import React from 'react';
import './App.css';

import DishState from './context/dish/DishState';

import { Navbar } from './components/layout/Navbar';
import { AddDish } from './components/dish/AddDish';

function App() {
  return (
    <DishState>
      <div className='App'>
        <Navbar/>
        <div className='container'>
          <AddDish/>
        </div>
      </div>
    </DishState>
  );
}

export default App;
