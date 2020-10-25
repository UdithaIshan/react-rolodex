import React, {Component} from 'react';
import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
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
      <CardList avatars={this.state.avatars}>
        
      </CardList>
    </div>
  );
}
}

export default App;
