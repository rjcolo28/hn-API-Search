import GET_TERM from '../actions/types';

const initState = {
    searchTerm: null
}

export default function (state = initState, action = {}) {
    switch (action.type) {
        case GET_TERM:
            return {
                searchTerm: action.term
            }
        default:
            return state
    }
}