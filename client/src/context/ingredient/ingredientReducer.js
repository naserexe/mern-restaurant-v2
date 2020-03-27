import {GET_INGREDIENTS, INGREDIENT_ERROR, SUCCESS_FALSE, ADD_INGREDIENT} from '../types'

export default (state, action) => {
  switch(action.type){
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.data,
        loading: false
      }
    case ADD_INGREDIENT:
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
    case INGREDIENT_ERROR:
      return {
        ...state,
        error: action.payload.split(',')
      };
    default:
      return state;
  }
}