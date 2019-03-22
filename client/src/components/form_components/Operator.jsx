import React from 'react';

const Operator = ({value, handleChange}) => {
  return(
    <input
      class="operator"
      name="operator"
      placeholder="Enter a math operator"
      type="text"      
      value={value}
      onChange={handleChange}
  />
  )
}

export default Operator;