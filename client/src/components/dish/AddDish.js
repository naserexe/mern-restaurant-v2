import React, { useState, useContext } from 'react';
import DishContext from '../../context/dish/dishContext';

const AddDish = () => {
  const dishContext = useContext(DishContext);

  const [dishName, setDishName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const { addDish, error, success} = dishContext;

  const onSubmit = (e) => {
    e.preventDefault();

    addDish({name: dishName, sellingPrice});

    // Clear fields
    setDishName('');
    setSellingPrice('');
  }

  const errors = error ? error.map(err => (<div class="alert alert-dismissible alert-danger">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>{err}</strong>
</div>)) : null;

  const succeeded = success ? (<div class="alert alert-dismissible alert-success">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Successfully</strong> new dish added
</div>) : null;

  return (
    <div id = "add-dish-modal" className="modal fade" >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Dish</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {errors}
          {succeeded}
          <div className="modal-body">
            <form>
              <div className="form-group">
                
                <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} className= "form-control" placeholder="Enter Dish name"/>
              </div>

              <div className="form-group">
              
                <input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} className="form-control" placeholder="Enter selling price"/>
              </div>
            </form>
          </div>

            <div className="modal-footer">
              <button type="button" onClick={onSubmit} className="btn btn-primary">Add Dish</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export  default AddDish;