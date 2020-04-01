import React, { useReducer } from 'react';
import axios from "axios";
import DishContext from "./dishContext";
import DishReducer from "./dishReducer";
import { ADD_DISH, DISH_ERROR, SUCCESS_FALSE, GET_DISHES, CLEAR_ERROR, DELETE_DISH, SET_CURRENT_DISH_ID, ADD_RECIPE, SELL_DISH, GET_INGREDIENTS } from '../types'

const DishState = props => {
  const initialState = {
    dishes:[],
    currentDish_id:null,
    error: null,
    success: false,
    loading: true,
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
      dispatch({ type: ADD_DISH, payload: res.data });
      setTimeout(() => {
        dispatch({type: SUCCESS_FALSE})
      }, 3000);
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.data.error });
      setTimeout(() => {
        dispatch({type: CLEAR_ERROR});
      }, 3000)
    }
  }

   // Get Dishes
  const getDishes = async () => {
    try {
      const res = await axios.get("/api/v2/dish");
      dispatch({ type: GET_DISHES, payload: res.data });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.msg });
    }
  };

   // Sell Dish
  const sellDish = async (_id) => {
    try {
      const res = await axios.put(`/api/v2/dish/${_id}`);
      dispatch({ type: GET_INGREDIENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.data.error });
    }
  };

  // Set Current dish _id
  const setCurrentDish_id = async (dish_id) => {
    try {
      dispatch({ type: SET_CURRENT_DISH_ID, payload: dish_id });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err });
      }
    };

    // Add recipe
  const addRecipe = async (dish_id, ingredient_id, quantity) => {
    try {
      const res = await axios.post(`/api/v2/dish/recipe/${dish_id}/${ingredient_id}`, quantity);
      dispatch({ type: ADD_RECIPE, payload: res.data.data });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.data.error });
      }
    };

  // Delete Dish
  const deleteDish = async (_id) => {
    try {
      await axios.delete(`/api/v2/dish/${_id}`);
      dispatch({ type: DELETE_DISH, payload: _id });
    } catch (err) {
      dispatch({ type: DISH_ERROR, payload: err.response.msg });
    }
  };

  return (
    <DishContext.Provider
    value={{
      dishes: state.dishes,
      error: state.error,
      success: state.success,
      loading: state.loading,
      currentDish_id: state.currentDish_id,
      addDish,
      getDishes,
      deleteDish,
      setCurrentDish_id,
      addRecipe,
      sellDish
    }}
    >
    {props.children}
    </DishContext.Provider>
  )
}

export default DishState;