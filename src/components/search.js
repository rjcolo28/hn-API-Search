import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSearchTerm from '../actions/searchAction';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const searchTerm = this.state.searchTerm;

        this.props.getSearchTerm(searchTerm);
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

Search.propTypes = {
    getSearchTerm: PropTypes.func.isRequired
}

export default connect(null, { getSearchTerm })(Search)
