import React, {useContext, useEffect} from 'react';
import IngredientItem from './IngredientItem'

import IngredientContext from '../../context/ingredient/ingredientContext'

export const Ingredient = () => {
  const ingredientContext = useContext(IngredientContext);
  const { ingredients, getIngredients } = ingredientContext;

  useEffect(() => {
    getIngredients();
  // eslint-disable-next-line
  },[])

  const ingredientItem = ingredients.map(ingredient => (
    <IngredientItem ingredient={ingredient} key={ingredient._id} />
  ));

  return (
    <div>
        <div>
      <h4 className="text-info m-3">Ingredients</h4>
      <table className='table table-hover border border-info'>
        <thead className="table-dark">
          <tr>
            <th>Ingredients</th>
            <th>Current Stock</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ingredientItem}</tbody>
      </table>
    </div>
    </div>
  )
}
