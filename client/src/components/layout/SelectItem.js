import React from 'react'

const SelectItem = ({ingredient}) => {
  const {name} = ingredient;
  return (
    <>
      <option value={name}>{name}</option>
    </>
  )
}
export default SelectItem;