import React, { useContext } from 'react'
import DishContext from '../../context/dish/dishContext'
import IngredientContext from '../../context/ingredient/ingredientContext'

const DishItem = ({dish}) => {
  const dishContext = useContext(DishContext);
  const ingredientContext = useContext(IngredientContext);

  const { deleteDish, sellDish, setCurrentDish_id } = dishContext;
  const { getIngredients } = ingredientContext;

  const {name, recipe, _id} = dish;

  const setDish_id = () => {
    setCurrentDish_id(_id);
  }

  const handleDelete = () => {
    deleteDish(_id)
  }

  const handleSell = async () => {
    await sellDish(_id);
    getIngredients();
  }

  return (
    <tr className="table-dark">
    <td>{name}</td>
    <td>
      {recipe.map(r => {
        return (
          <p key={r._id}>
            {r.recipeName}({r.quantity}),
          </p>
        );
      })}
    </td>
    <td>

      {" "}
      <a className="modal-trigger nav-link" onClick={setDish_id} data-toggle="modal" data-target="#add-recipe-modal" href="!#">Add Ingredient</a>

    </td>
    <td className="text-success">${dish.sellingPrice}</td>
    <td>
      {" "}
      {recipe.length === 0 ? <p>Add recipe before sell</p>: <button
        onClick={handleSell}
        className='btn btn-outline-success btn-sm m-2'
      >
        SELL
      </button>}
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