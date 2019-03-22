import React from 'react';

const Label = ({value, handleChange}) => {
  return(
    <input
      class="number"
      name="label"
      placeholder="Enter a name for calculation"
      type="text"
      value={value}
      onChange={handleChange}
    />
  )
}

export default Label;