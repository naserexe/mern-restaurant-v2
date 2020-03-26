import {
  ADD_DISH,
  DISH_ERROR,
} from "../types";

export default (state, action) => {
  switch(action.type){
    case ADD_DISH:
      return{
        ...state,
        dishes: [action.payload, ...state.dishes]
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