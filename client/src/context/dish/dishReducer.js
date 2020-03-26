import {
  ADD_DISH,
  DISH_ERROR,
  SUCCESS_FALSE,
  GET_DISHES,
} from "../types";

export default (state, action) => {
  switch(action.type){
    case GET_DISHES:
      return {
        ...state,
        dishes: action.payload.data,
        loading: false
      }
    case ADD_DISH:
      return{
        ...state,
        dishes: [action.payload.data, ...state.dishes],
        error: null,
        success:true
      }
    case SUCCESS_FALSE:
      return {
        ...state,
        success: false,
      }
    case DISH_ERROR:
      return {
        ...state,
        error: action.payload.split(',')
      };
    default:
      return state;
  }
}