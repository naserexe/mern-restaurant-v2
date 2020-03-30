import React, {useContext, useEffect} from 'react';
import IngredientItem from './IngredientItem'
import Spinner from '../layout/Spinner'

import IngredientContext from '../../context/ingredient/ingredientContext'

const Ingredient = () => {
  const ingredientContext = useContext(IngredientContext);
  const { ingredients, loading, getIngredients } = ingredientContext;

  useEffect(() => {
    getIngredients();
  // eslint-disable-next-line
  },[])

  const ingredientItem = ingredients.map(ingredient => (
    <IngredientItem ingredient={ingredient} key={ingredient._id} />
  ));

  if(ingredients.length === 0 && !loading){
    return (<h4 className="text-info">Please add ingredient</h4>);
  }

  if(loading){
    return <Spinner/>
  }

  return (
    <div className="table-responsive-sm">
      <h4 className="text-info m-3">Ingredients</h4>
        <div className="table-responsive-lg">
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

export default Ingredient;