import React, { useState, useContext } from 'react';
import DishContext from '../../context/dish/dishContext';
import IngredientContext from '../../context/ingredient/ingredientContext';


export const AddRecipe = () => {
  const dishContext = useContext(DishContext);
  const ingredientContext = useContext(IngredientContext);

  const { ingredients } = ingredientContext

  const {error, success, currentDish_id, addRecipe} = dishContext;
  const [quantity, setQuantity] = useState('');
  const [recipe_id, setRecipe_id] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // const recipeInfo ={quantity}
    addRecipe(currentDish_id, recipe_id, {quantity});

    setQuantity('');
  }

  const errors = error ? error.map(err => (<div key={err} className="alert alert-dismissible alert-danger">
  <button type="button" className="close" data-dismiss="alert">&times;</button>
  <strong>{err}</strong>
</div>)) : null;

  const succeeded = success ? (<div className="alert alert-dismissible alert-success">
  <button type="button" className="close" data-dismiss="alert">&times;</button>
  <strong>Successfully</strong> new recipe added
</div>) : null;

  return (
    <div id = "add-recipe-modal" className="modal fade" >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add recipe for dish</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {errors}
        {succeeded}
        <form onSubmit={onSubmit}>
        <div className="modal-body">
          
            <div className="form-group">
              <select  className="custom-select" onChange={e => {
                setRecipe_id(e.target.value)
              }} required>
              <option defaultValue value="" >Choose Ingredient</option>
                {ingredients.map(ingredient =>  <option key={ingredient._id} _id={ingredient._id} value={ingredient._id}>{ingredient.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <input type="number" required value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder="Enter quantity"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit"  className="btn btn-primary">Add Dish</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
