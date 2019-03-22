import React from 'react';

const _Number = ({name, value, handleChange}) => {
  return(
    <input
      class="number"
      name={name}
      placeholder="Enter a number"
      type="number"
      value={value}
      onChange={handleChange}

    />
  )
}

export default _Number;