import React from 'react';
import CalcEntry from './CalcEntry.jsx';

const CalcsList = ({calcs, deleteCalc, hover, setPrev}) => {
  return(
    <ul>
      {calcs.map( (calc, index) => {
        return <CalcEntry key={index} calc={calc} deleteCalc={deleteCalc} hover={hover} setPrev={setPrev}/>
      })}
    </ul>
  )
}

export default CalcsList;