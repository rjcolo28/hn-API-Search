import FETCH_ARTICLES from './types';

const fetchArticles = (searchTerm) => dispatch => {
    fetch("http://hn.algolia.com/api/v1/search?query=")
        .then(res => res.json())
        .then(articles =>
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles.hits,
            }))
};

export default fetchArticles;