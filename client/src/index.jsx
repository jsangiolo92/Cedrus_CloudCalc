import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      calcs: []
    }
  }

  render() {
    return(
      <div>REACT</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));