import React from 'react';
import './App.css';
import Header from './Header';
import Cycle from './Cycle'
import Interface from './Interface';

// TODO: explore usage of MediaWiki API

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      index: 0,
      max: 4,
      name: ""
    }
  }

  increment = () => {
    this.setState( (prevState) => {
      return prevState.index < this.state.max ? prevState.index++ : prevState.index = 0;
    })
  }

  decrement = () => {
    this.setState( (prevState) => {
      return prevState.index > 0 ? prevState.index-- : prevState.index = this.state.max;
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Cycle left={this.decrement} label={this.state.index} right={this.increment} />
        <Interface index={this.state.index} />
      </div>
    )
  }
}

export default App;
