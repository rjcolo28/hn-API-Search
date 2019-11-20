import SEARCH_TERM from '../actions/types';



export default function (state = '', action) {
    switch (action.type) {
        case SEARCH_TERM:
            return {
                state: action.text
            }
        default:
            return state
    }
}