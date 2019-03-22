import React from 'react';
import _Number from './form_components/_Number.jsx';
import Operator from './form_components/Operator.jsx';

class CalcForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numberOne: '',
      numberTwo: '',
      operator: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form id="calc-form">
        <_Number name={'numberOne'} value={this.state.numberOne} handleChange={this.handleChange.bind(this)}/>
        <Operator value={this.state.operator} handleChange={this.handleChange.bind(this)}/>
        <_Number name={'numberTwo'} value={this.state.numberTwo} handleChange={this.handleChange.bind(this)}/>
      </form>
    )
  }
}

export default CalcForm;