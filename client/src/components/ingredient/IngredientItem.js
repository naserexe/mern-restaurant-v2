import React, {useContext} from 'react'
import IngredientContext from '../../context/ingredient/ingredientContext'
import DishContext from '../../context/dish/dishContext'

const IngredientItem = ({ingredient}) => {
  const ingredientContext = useContext(IngredientContext);
  const dishContext = useContext(DishContext);

  const { deleteIngredient, buyIngredient } = ingredientContext;
  const { getBalance } = dishContext;

  const { name, currentStock, cost, _id} = ingredient;

  const buy = async () => {
    await buyIngredient(_id);
    getBalance();
  }

  const deleteHandler = () => {
    deleteIngredient(_id);
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