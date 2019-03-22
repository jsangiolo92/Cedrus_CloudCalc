import React from 'react';
import _Number from './form_components/_Number.jsx';
import Operator from './form_components/Operator.jsx';

class CalcForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numberOne: '',
      numberTwo: '',
      operater: ''
    }
  }

  render() {
    return(
      <form id="calc-form">

      </form>
    )
  }
}

export default CalcForm;