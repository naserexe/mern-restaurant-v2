import React from 'react'

const Toast = ({message}) => {
  return (
  <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <strong className="mr-auto">Ingredient</strong>
      
      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="toast-body text-success">
      {message}
    </div>
  </div>
  )
}
export default Toast;