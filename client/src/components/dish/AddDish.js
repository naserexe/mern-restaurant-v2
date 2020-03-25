import React from 'react'

export const AddDish = () => {
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
            <div className="form-group">
              
              <input type="text" className="form-control" placeholder="Enter Dish name"/>
                <small id="emailHelp" className="form-text text-muted">Error will go here</small>
            </div>

            <div className="form-group">
            
              <input type="number" className="form-control"placeholder="Enter selling price"/>
            </div>
          </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Add Dish</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
  )
}
