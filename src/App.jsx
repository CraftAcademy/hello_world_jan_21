import React, { Component } from 'react'
import Planet from './Planet'

class App extends Component {
  state = {
    greeting: 'Hello',
    planet: 'World',
    weather: 'Sunny'
  }

  onClickHandler = () => {
    let newGreeting = this.state.greeting === 'Hello' ? 'Good afternoon' : 'Hello'
    this.setState({ greeting: newGreeting });
  }

  onChangeHandler = (event) => {
    this.setState({ weather: event.target.value });
  }

  render() {
    const {greeting} = this.state
    return (
      <div>
        {greeting} <Planet planet={this.state.planet} weather={this.state.weather}/> from class component
        <button onClick={this.onClickHandler}>Change greeting</button>
        <input type="text" onChange={this.onChangeHandler}/>
      </div>
    )
  }
}

export default App
