import {
  ADD_DISH,
  DISH_ERROR,
  SUCCESS_FALSE,
  GET_DISHES,
  CLEAR_ERROR,
  DELETE_DISH,
  SET_CURRENT_DISH_ID,
  ADD_RECIPE,
  SELL_DISH
} from "../types";

export default (state, action) => {
  switch(action.type){
    case GET_DISHES:
      return {
        ...state,
        dishes: action.payload.data,
        loading: false
      }
    case ADD_RECIPE:
      return {
        ...state,
        dishes: state.dishes.map(dish => 
          dish._id === action.payload._id ? action.payload : dish)
      }
    case ADD_DISH:
      return{
        ...state,
        dishes: [action.payload.data, ...state.dishes],
        error: null,
        success:true
      }
    case SET_CURRENT_DISH_ID:
      return {
        ...state,
        currentDish_id: action.payload
      }
    case SUCCESS_FALSE:
      return {
        ...state,
        success: false,
      }
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter(dish => dish._id !== action.payload )
      }
    case DISH_ERROR:
      return {
        ...state,
        error: action.payload.split(',')
      };
      case CLEAR_ERROR:
        return{
        ...state,
        error: null
      }
    default:
      return state;
  }
}