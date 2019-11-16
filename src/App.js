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
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1>HN API Search</h1>
          <form>
            <input
              style = {{
                fontSize: 24,
                width: "99%",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16
              }}
              placeholder="Enter term here"
              onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
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
