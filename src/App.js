import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import Search from './search/Search'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
