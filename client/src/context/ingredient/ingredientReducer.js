import {GET_INGREDIENTS, INGREDIENT_ERROR, SUCCESS_FALSE, ADD_INGREDIENT, CLEAR_ERROR} from '../types'

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
    default:
      return state;
  }
}