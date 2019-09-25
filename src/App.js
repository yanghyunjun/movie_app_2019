import React from 'react';

class App extends React.Component{
  state = {
    count:0
  };
  Add = () =>{
    this.setState(current =>({count: current.count+1 }))
  };
  Minus = () => {
    this.setState(current => ({count: current.count-1 }))
  };
  render() {
    return (
    <div>
      <h3>The Number is {this.state.count}</h3>
      <button onClick={this.Add}>Add</button>
      <button onClick={this.Minus}>minus</button>
    </div>)}
}

export default App;
