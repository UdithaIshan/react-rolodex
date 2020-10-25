import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      avatars: [],
      searchKey: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((avatar) => this.setState({avatars: avatar}));
  }

  render() {
    const {avatars, searchKey} = this.state;
    const filterdAvatars = avatars.filter(avatar => avatar.name.toLowerCase().includes(searchKey.toLowerCase()));
    // const filterdAvatars = this.state.avatars.filter(avatar => avatar.name.toLowerCase().includes(this.state.searchKey.toLowerCase()));


  return(
    <div className="App">
      <h1>Rolodox</h1>  
      <SearchBox placeholder="Search" handleChange={(e) => {this.setState({searchKey:e.target.value})}}/>
      <CardList avatars={filterdAvatars}/>
    </div>
  );
}
}

export default App;
