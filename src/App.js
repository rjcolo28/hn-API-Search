import React, { Component } from 'react';
import './App.css';
import HNRow from './hnRows.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.runSearch()
  }

  runSearch(searchTerm) {
    const urlString = 'http://hn.algolia.com/api/v1/search?query=' + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('data successfully fetched')
        const results = searchResults.hits
        var hnRows = []

        results.forEach(article => {
          var row = <HNRow key={article.objectID} article={article} />
          hnRows.push(row)
        });

        this.setState({ rows: hnRows })
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data")
      }
    })
  }

  handleInputChange(event) {
    const searchTerm = event.target.value
    this.runSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1>HN API Search</h1>
          <form>
            <input style={{fontSize: 24}} placeholder="Enter term here" onChange={this.handleInputChange.bind(this)} />
          </form>
        </header>
        <div className="container">
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
