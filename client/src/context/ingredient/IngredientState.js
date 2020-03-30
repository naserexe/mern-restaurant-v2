import React, { useReducer } from 'react';
import axios from "axios";
import IngredientContext from "./ingredientContext";
import IngredientReducer from "./ingredientReducer";

import { 
  GET_INGREDIENTS,
  INGREDIENT_ERROR,
  SUCCESS_FALSE,
  ADD_INGREDIENT,
  CLEAR_ERROR,
  DELETE_INGREDIENT,
  BUY_INGREDIENT,
} from '../types'

const IngredientState = props => {
  const initialState = {
    ingredients:[],
    error: null,
    success: false,
    loading: true,
  }

  const [state, dispatch] = useReducer(IngredientReducer, initialState);
  
  // Add Ingredient
  const addIngredient = async ingredient => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/v2/ingredient", ingredient, config);
      dispatch({ type: ADD_INGREDIENT, payload: res.data });
      setTimeout(() => {
        dispatch({type: SUCCESS_FALSE})
      }, 3000);
    } catch (err) {
      dispatch({ type: INGREDIENT_ERROR, payload: err.response.data.error });
      setTimeout(() => {
        dispatch({type: CLEAR_ERROR})
      }, 3000)
    }
  }

   // Get Ingredients
  const getIngredients = async () => {
    try {
      
      const res = await axios.get("/api/v2/ingredient");
      dispatch({ type: GET_INGREDIENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: INGREDIENT_ERROR, payload: err.response.msg });
    }
  };

   // Buy ingredient
  const buyIngredient = async (_id) => {
    try {
      const res = await axios.put(`/api/v2/ingredient/${_id}`);
      dispatch({type: BUY_INGREDIENT, payload: res.data.data});
    } catch (err) {
      dispatch({type: INGREDIENT_ERROR, payload: err.response.msg});
    }
  }

  // Delete ingredient
  const deleteIngredient = async (_id) => {
    try {
      axios.delete(`/api/v2/ingredient/${_id}`);
      dispatch({type: DELETE_INGREDIENT, payload: _id});
    } catch (err) {
      dispatch({type: INGREDIENT_ERROR, payload: err.response.msg});
    }
  }

  return (
    <IngredientContext.Provider
    value={{
      ingredients: state.ingredients,
      loading: state.loading,
      error: state.error,
      success: state.success,
      getIngredients,
      addIngredient,
      deleteIngredient,
      buyIngredient,
    }}
    >
    {props.children}
    </IngredientContext.Provider>
  )
}

export default IngredientState;