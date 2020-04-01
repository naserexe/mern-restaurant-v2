import React, { Fragment } from 'react'
import Dish from './dish/Dish';
import Ingredient from './ingredient/Ingredient'

const Dashboard = () => {
  return (
    <Fragment>
      <h1 className='text-success'>Dashboard</h1>
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