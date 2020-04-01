import {
  GET_INGREDIENTS,
  INGREDIENT_ERROR,
  SUCCESS_FALSE,
  ADD_INGREDIENT,
  CLEAR_ERROR,
  DELETE_INGREDIENT,
  BUY_INGREDIENT,
  SET_LOADING,
} from '../types'

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
        ingredients: [action.payload.data, ...state.ingredients],
        error: null,
        success:true
      }
    case BUY_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(ingredient => 
          ingredient._id === action.payload._id ? action.payload : ingredient),
      };
    case DELETE_INGREDIENT:
      return{
        ...state,
        ingredients: state.ingredients.filter(ingredient => 
          ingredient._id !== action.payload
        )
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
    case CLEAR_ERROR:
      return{
        ...state,
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}