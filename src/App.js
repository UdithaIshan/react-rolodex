import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      avatars: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((avatar) => this.setState({avatars: avatar}))
  }

  render() {
  return(
    <div className="App">
      {
        this.state.avatars.map((avatar) => (
        <h1 key={avatar.key}>{avatar.name}</h1>
        ))
      }
    </div>
  );
}
}

export default App;
