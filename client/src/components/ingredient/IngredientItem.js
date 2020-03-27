import React from 'react'

const IngredientItem = ({ingredient}) => {
  const { name, currentStock, cost} = ingredient;

  const buy = () => {
    console.log(ingredient._id)
  }

  const deleteHandler = () => {
    console.log(ingredient._id)
  }
  return (
    <tr className="table-dark">
      <td>{name}</td>
      <td>{currentStock}</td>
      <td className="text-success">${cost}</td>
      <td>
        <button onClick={buy} className='btn btn-outline-warning btn-sm m-2'>
          BUY
        </button>
        <button
          onClick={deleteHandler}
          className='btn btn-outline-danger btn-sm'
        >
          DELETE
        </button>
      </td>
    </tr>
  )
}

export default IngredientItem;