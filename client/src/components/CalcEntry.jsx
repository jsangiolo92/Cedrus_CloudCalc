import React from 'react';

const CalcEntry = ({calc, deleteCalc, hover}) => {
  return(
    <li onMouseEnter={() => {hover(calc.name)}}>
      {`${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}`}
      <button onClick={ () => {deleteCalc(calc._id)}}>Click To Remove</button>
    </li>
  )
}

export default CalcEntry;