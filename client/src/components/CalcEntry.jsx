import React from 'react';

const CalcEntry = ({calc, deleteCalc}) => {
  return(
    <li onMouseEnter={() => {console.log('hovering: ', calc.name)}}>
      {`${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}`}
      <button onClick={ () => {deleteCalc(calc._id)}}>Click To Remove</button>
    </li>
  )
}

export default CalcEntry;