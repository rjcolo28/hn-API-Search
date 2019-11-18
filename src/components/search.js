import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Search
