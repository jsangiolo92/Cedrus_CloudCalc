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

  render() {
    return(
      <div>
        {this.state.showForm ? <CalcForm /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));