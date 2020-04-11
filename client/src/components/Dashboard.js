import React, { Fragment, useEffect, useContext } from 'react'
import Dish from './dish/Dish';
import Ingredient from './ingredient/Ingredient';
import Spinner from './layout/Spinner'

import DishContext from '../context/dish/dishContext'

const Dashboard = () => {
  const dishContext  = useContext(DishContext);
  const { balance, loading, getBalance } = dishContext
  useEffect(() => {
    getBalance();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1 className='text-info'>Dashboard</h1>
      {balance && !loading ? (<h3 className='text-warning'>Balance: <strong className='text-success'>${balance.balanceAmount}</strong></h3>): <Spinner/>}
      <div className="row">
      <div className="col">
        <Ingredient/>
      </div>
      <div className="col">
        <Dish/>
      </div>
    </div>
    </Fragment>
  )
}
export default Dashboard;