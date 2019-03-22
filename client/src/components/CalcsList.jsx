import React from 'react';
import CalcEntry from './CalcEntry.jsx';

const CalcsList = ({calcs, deleteCalc}) => {
  return(
    <ul>
      {calcs.map( (calc, index) => {
        return <CalcEntry key={index} calc={calc} deleteCalc={deleteCalc}/>
      })}
    </ul>
  )
}

export default CalcsList;