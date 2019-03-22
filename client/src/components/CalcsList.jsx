import React from 'react';
import CalcEntry from './CalcEntry.jsx';

const CalcsList = ({calcs, deleteCalc, hover}) => {
  return(
    <ul>
      {calcs.map( (calc, index) => {
        return <CalcEntry key={index} calc={calc} deleteCalc={deleteCalc} hover={hover}/>
      })}
    </ul>
  )
}

export default CalcsList;