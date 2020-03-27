import React from 'react';
import './App.css';

import DishState from './context/dish/DishState';
import IngredientState from './context/ingredient/IngredientState';

import { Navbar } from './components/layout/Navbar';
import { AddDish } from './components/dish/AddDish';
import Dish  from './components/dish/Dish';
import { Ingredient } from './components/ingredient/Ingredient';

function App() {
  return (
    <DishState>
      <IngredientState>
        <div className='App'>
          <Navbar/>
          <div className="container-fluid">
            <AddDish/>
            <div className="row">

              <div className="col">
                <Ingredient/>
              </div>

              <div className="col">
                <Dish/>
              </div>

            </div>
          </div>
        </div>
      </IngredientState>
    </DishState>
  );
}

export default App;
