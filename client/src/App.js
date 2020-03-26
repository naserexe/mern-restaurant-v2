import React from 'react';
import './App.css';

import DishState from './context/dish/DishState';

import { Navbar } from './components/layout/Navbar';
import { AddDish } from './components/dish/AddDish';
import Dish  from './components/dish/Dish';

function App() {
  return (
    <DishState>
      <div className='App'>
        <Navbar/>
        <div className='container'>
          <AddDish/>
          <Dish/>
        </div>
      </div>
    </DishState>
  );
}

export default App;
