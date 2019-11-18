import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queries: []
        }
    }

    componentWillMount() {
        fetch("http://hn.algolia.com/api/v1/search?query=")
            .then(res => res.json())
            .then(data =>  this.setState({queries: data.hits}))
    }

    render() {
        const articles = this.state.queries.map(query => (
            <div key={query.objectID} >
                <h3>{query.title}</h3>
                <h4>{query.author}</h4>
                <a href={query.url}>{query.url} </a>
            </div>
        ));
        return (
            <div>
                {articles}
            </div>
        )
    }
}

export default Results
