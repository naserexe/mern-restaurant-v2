import React, { useState, useContext } from 'react';
import DishContext from '../../context/dish/dishContext';

export const AddDish = () => {
  const dishContext = useContext(DishContext);

  const [dishName, setDishName] = useState('');
  const [sellingPrice, setSellingPrice] = useState(0);

  const { addDish, error } = dishContext;

  const onSubmit = (e) => {
    e.preventDefault();

    addDish({name: dishName, sellingPrice});

    // Clear fields
    setDishName("");
    setSellingPrice(0)
  }

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

          <div className="modal-body">
            <form>
              <div className="form-group">
                
                <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} className={error ? "form-control is-invalid" : "form-control"} placeholder="Enter Dish name"/>
                <div class="invalid-feedback">{error ? error[1] : null}</div>
              </div>

              <div className="form-group">
              
                <input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} className={error ? "form-control is-invalid" : "form-control"}placeholder="Enter selling price"/>
                <div class="invalid-feedback">{error ? error[0] : null}</div>
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
