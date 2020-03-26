import React from 'react'

const DishItem = ({dish}) => {
  const addRecipe = () => {
    console.log('Todo AddRecipe')
  }

  const handleDelete = () => {
    console.log(`Todo Delete ${dish._id}`)
  }

  const handleSell = () => {
    console.log('Todo Sell')
  }

  return (
    <tr className="table-dark">
    <td>{dish.name}</td>
    <td>
      {dish.recipe.map(r => {
        return (
          <p key={r._id}>
            {r.recipeName}({r.quantity}),
          </p>
        );
      })}
    </td>
    <td>
      {" "}
      <a
        onClick={addRecipe}
        href='#add-recipe-modal'
        className='modal-trigger text-info'
      >
        Add Recipe
      </a>
    </td>
    <td className="text-success">${dish.sellingPrice}</td>
    <td>
      {" "}
      <button
        onClick={handleSell}
        className='btn btn-outline-success btn-sm m-2'
      >
        SELL
      </button>
      <button
        onClick={handleDelete}
        className='btn btn-outline-danger btn-sm'
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default DishItem;