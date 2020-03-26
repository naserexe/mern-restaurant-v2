import React, { useReducer } from 'react';
import axios from "axios";
import DishContext from "./dishContext";
import DishReducer from "./dishReducer";
import { ADD_DISH, DISH_ERROR } from '../types'

const DishState = props => {
  const initialState = {
    dishes: [],
    error: null,
  }

  const [state, dispatch] = useReducer(DishReducer, initialState);
  
  // Add Dish
  const addDish = async dish => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/v2/dish", dish, config);
      dispatch({ type: ADD_DISH, payload: res.data.data });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.data.error });
    }
  }

  return (
    <DishContext.Provider
    value={{
      dishes: state.dishes,
      error: state.error,
      addDish
    }}
    >
    {props.children}
    </DishContext.Provider>
  )
}

export default DishState;