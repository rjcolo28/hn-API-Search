import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import Results from './components/results'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <Search />
        </div>
        <div>
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
