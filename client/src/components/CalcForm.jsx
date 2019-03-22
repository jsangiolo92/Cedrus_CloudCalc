import React from 'react';
import _Number from './form_components/_Number.jsx';
import Operator from './form_components/Operator.jsx';
import Label from './form_components/Label.jsx';
import axios from 'axios';

class CalcForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numberOne: '',
      numberTwo: '',
      operator: '',
      label: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkForValidOperator() {
    const sign = this.state.operator;
    return (sign === '+' || sign === '-' || sign === '*' || sign === '/');
  }

  addCalculation() {
    axios.post('/calcs', this.state)
    .then( () => {
      console.log('calculation added to db')
    })
    .catch( (err) => {
      console.log('error in axios post to calcs: ', err)
    });
  }

  render() {
    return(
      <div>
      <form id="calc-form">
        <_Number name={'numberOne'} value={this.state.numberOne} handleChange={this.handleChange.bind(this)}/>
        <Operator value={this.state.operator} handleChange={this.handleChange.bind(this)}/>
        <_Number name={'numberTwo'} value={this.state.numberTwo} handleChange={this.handleChange.bind(this)}/>
        <Label value={this.state.label} handleChange={this.handleChange.bind(this)}/>
      </form>
      <br/>
      <button onClick={() => this.addCalculation()}>Add Calc to Database</button>
      </div>
      
    )
  }
}

export default CalcForm;