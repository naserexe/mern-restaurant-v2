import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import DishState from './context/dish/DishState';
import IngredientState from './context/ingredient/IngredientState';

import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AddDish from './components/dish/AddDish';
import AddIngredient from './components/ingredient/AddIngredient';
import { AddRecipe } from './components/dish/AddRecipe';
import Dashboard from './components/Dashboard';
import { About } from './components/layout/About';

function App() {
  return (
    <DishState>
      <IngredientState>
        <BrowserRouter>
          <div className='App'>
            <Navbar/>
            <div className="container-fluid">
              <AddDish/>
              <AddIngredient/>
              <AddRecipe/>
              <Switch>
                  <Route exact path='/' component={Dashboard}/>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/about' component={About}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </IngredientState>
    </DishState>
  );
}

export default App;
