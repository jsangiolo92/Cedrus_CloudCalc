import React from 'react';
import ReactDOM from 'react-dom';
import CalcForm from './components/CalcForm.jsx';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      calcs: [],
      showForm: false
    }
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }



  render() {
    return(
      <div>
        <button onClick={() => this.toggleForm()}>Click to Add a New Calculation</button>
        <br/>
        {this.state.showForm ? <CalcForm /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));