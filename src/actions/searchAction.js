import FETCH_ARTICLES from './types';
import GET_TERM from './types';

const fetchArticles = (searchTerm) => dispatch => {
    fetch("http://hn.algolia.com/api/v1/search?query=" + searchTerm)
        .then(res => res.json())
        .then(articles =>
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles.hits,
            }))
};

export function getSearchTerm(term) {
    return{
        type: GET_TERM,
        term
    };
}

export default fetchArticles;