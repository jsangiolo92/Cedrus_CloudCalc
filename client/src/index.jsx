import React from 'react';
import ReactDOM from 'react-dom';
import CalcForm from './components/CalcForm.jsx';
import CalcsList from './components/CalcsList.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      calcs: [],
      currentCalc: null,
      showForm: false
    }
  }

  componentDidMount() {
    this.getCalcs();
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  getCalcs() {
    axios.get('/calcs')
    .then( ({data}) => {
      this.setState({calcs: data})
    })
    .catch( (err) => {
      console.log('error in axios get to calcs: ', err);
    });
  }

  deleteCalc(id) {
    axios.delete('/calcs', {params: {id: id}})
    .then( () => {
      this.getCalcs();
      console.log('calc deleted from database');
    })
    .catch( (err) => {
      console.log('error in axios delete to calcs: ', err);
    });
  }

  setPrevCalc(calc) {
    this.setState({currentCalc: calc}, () => {
      if (!this.state.showForm) {
        this.toggleForm();
      }
    });
  }

  getCurrentCalc() {
    return this.state.currentCalc;
  }

  hoverOnCalc(name) {
    console.log(name);
  }

  render() {
    return(
      <div>
        <button onClick={() => this.toggleForm()}>{this.state.showForm ? 'Click to Hide Form' : 'Click to Add a New Calculation'}</button>
        <br/>
        {this.state.showForm ? <CalcForm getCalcs={this.getCalcs.bind(this)} getCurrentCalc={this.getCurrentCalc.bind(this)}/> : null}
        <br/>
        <CalcsList calcs={this.state.calcs} deleteCalc={this.deleteCalc.bind(this)} hover={this.hoverOnCalc.bind(this)} setPrev={this.setPrevCalc.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));