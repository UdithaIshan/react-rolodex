import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      avatars: [
        {
          name: 'Uditha Ishan',
          key: 'a1'
        },
        {
          name: 'Ishara Wijekoon',
          key: 'a2'
        },
        {
          name: 'xxx',
          key: 'a3'
        }
      ]
    }
  }

  render() {
  return(
    <div className="App">
      {
        this.state.avatars.map((avatar) => (
        <h1>{avatar.name}</h1>
        ))
      }
    </div>
  );
}
}

export default App;
