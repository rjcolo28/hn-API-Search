import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const searchTerm = this.state.searchTerm
        fetch("http://hn.algolia.com/api/v1/search?query=" + searchTerm)
        .then(res => res.json())
        .then(data => console.log(data.hits))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="searchTerm"
                        style={{
                            width: "95%",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 16,
                            fontSize: 24
                        }}
                        placeholder="Enter term here" onChange={this.onChange}
                        value={this.state.searchTerm} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search
