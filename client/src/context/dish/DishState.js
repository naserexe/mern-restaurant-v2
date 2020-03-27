import React, { useReducer } from 'react';
import axios from "axios";
import DishContext from "./dishContext";
import DishReducer from "./dishReducer";
import { ADD_DISH, DISH_ERROR, SUCCESS_FALSE, GET_DISHES } from '../types'

const DishState = props => {
  const initialState = {
    dishes:[],
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

  return (
    <DishContext.Provider
    value={{
      dishes: state.dishes,
      error: state.error,
      success: state.success,
      loading: state.loading,
      addDish,
      getDishes,
    }}
    >
    {props.children}
    </DishContext.Provider>
  )
}

export default DishState;