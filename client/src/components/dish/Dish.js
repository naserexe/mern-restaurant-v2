import React, {useContext, useEffect} from 'react';
import DishItem from './DishItem'
import Spinner from '../layout/Spinner';

import DishContext from '../../context/dish/dishContext'

const Dish = () => {
  const dishContext = useContext(DishContext);
  const { dishes, getDishes, loading } = dishContext;

  useEffect(() => {
    getDishes();
    // eslint-disable-next-line
  },[]);

  const dishesItem = dishes.map(singleDish => (
    <DishItem dish={singleDish} key={singleDish._id} />
  ));

  if(dishes.length === 0 && !loading){
    return (<h4 className="text-info">Please add dish</h4>);
  }

  if(loading){
    return <Spinner/>
  }

  return (
    <div className="table-responsive-sm">
      <h4 className="text-info m-3">Dishes</h4>
        <table className='table table-hover border border-info'>
          <thead className="table-dark">
            <tr >
              <th>Item</th>
              <th>Recipe</th>
              <th>Add Recipe</th>
              <th>Selling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{dishesItem}</tbody>
        </table>
    </div>
  )
}

export default Dish;
