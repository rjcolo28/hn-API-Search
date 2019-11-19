import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Search from './components/search';
import Results from './components/results';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>HN API Search</h1>
          <div>
            <Search />
          </div>
          <div>
            <Results />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
