/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArticles from '../actions/searchAction';

class Articles extends Component {
    componentWillMount() {
        this.props.fetchArticles();
    }

    render() {
        const articles = this.props.articles.map(article => (
            <div key={article.objectID} >
                <h3>{article.title}</h3>
                <h4>{article.author}</h4>
                <a href={article.url} target="_blank">{article.url} </a>
            </div>
        ));
        return (
            <div>
                {articles}
            </div>
        )
    }
}

Articles.propTypes = {
    fetchArticles: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    articles: state.articles.items
})

export default connect(mapStateToProps, { fetchArticles })(Articles);
