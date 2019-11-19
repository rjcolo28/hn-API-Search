import FETCH_ARTICLES from '../actions/types';

const initState = {
    items: []
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_ARTICLES:
            return{
                ...state,
                ...action.payload,
                items: action.payload
            }
        default:
            return state;
    }
}