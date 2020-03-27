import React, { useState, useContext } from 'react';
import IngredientContext from '../../context/ingredient/ingredientContext';

const AddIngredient = () => {
  const ingredientContext = useContext(IngredientContext);

  const [ingredientName, setIngredientName] = useState('');
  const [cost, setCost] = useState('');

  const { addIngredient, error, success } = ingredientContext;

  const onSubmit = (e) => {
    e.preventDefault();

    addIngredient({name: ingredientName, cost});

    // Clear fields
    setIngredientName('');
    setCost('');
  }

  const errors = error ? error.map(err => (<div class="alert alert-dismissible alert-danger">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>{err}</strong>
</div>)) : null;

  const succeeded = success ? (<div class="alert alert-dismissible alert-success">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Successfully</strong> new ingredient added
</div>) : null;

  return (
    <div id = "add-ingredient-modal" className="modal fade" >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Ingredient</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {errors}
          {succeeded}
          <div className="modal-body">
            <form>
              <div className="form-group">
                
                <input type="text" value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} className= "form-control" placeholder="Enter Ingredient name"/>
              </div>

              <div className="form-group">
              
                <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="form-control" placeholder="Enter buying cost"/>
              </div>
            </form>
          </div>

            <div className="modal-footer">
              <button type="button" onClick={onSubmit} className="btn btn-primary">Add Ingredient</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddIngredient;