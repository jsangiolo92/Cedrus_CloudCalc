import React from 'react';

const CalcEntry = ({calc}) => {
  return(
    <li>
      {`${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}`}
      <button>Click To Remove</button>
    </li>
  )
}

export default CalcEntry;