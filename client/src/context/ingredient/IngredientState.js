import React, { useReducer } from 'react';
import axios from "axios";
import IngredientContext from "./ingredientContext";
import IngredientReducer from "./ingredientReducer";

import { GET_INGREDIENTS, INGREDIENT_ERROR } from '../types'

const DishState = props => {
  const initialState = {
    ingredients:[],
    error: null,
    success: false,
    loading: true,
  }

  const [state, dispatch] = useReducer(IngredientReducer, initialState);
  
  // Add Dish
  // const addDish = async dish => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   };

  //   try {
  //     const res = await axios.post("/api/v2/dish", dish, config);
  //     dispatch({ type: GET_INGREDIENTS, payload: res.data });
  //     // setTimeout(() => {
  //     //   dispatch({type: SUCCESS_FALSE})
  //     // }, 3000);
  //   } catch (err) {
  //     dispatch({ type: INGREDIENT_ERROR, payload: err.response.data.error });
  //   }
  // }

   // Get Ingredients
  const getIngredients = async () => {
    try {
      const res = await axios.get("/api/v2/ingredient");
      dispatch({ type: GET_INGREDIENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: INGREDIENT_ERROR, payload: err.response.msg });
    }
  };

  return (
    <IngredientContext.Provider
    value={{
      ingredients: state.ingredients,
      getIngredients
    }}
    >
    {props.children}
    </IngredientContext.Provider>
  )
}

export default DishState;