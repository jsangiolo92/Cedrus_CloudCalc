import React from 'react';
import CalcEntry from './CalcEntry.jsx';

const CalcsList = ({calcs}) => {
  return(
    <ul>
      {calcs.map( (calc, index) => {
        return <CalcEntry key={index} calc={calc}/>
      })}
    </ul>
  )
}

export default CalcsList;