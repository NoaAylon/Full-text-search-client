export const ADD_DOC = 'ADD_DOC';
export const REMOVE_DOC = 'REMOVE_DOC';
export const SEARCH_DOCS = 'SEARCH_DOCS';

export const SearchReducer = (state, action) => {
    switch (action.type) {
        case ADD_DOC:
            return;
        case REMOVE_DOC:
            return;
        case SEARCH_DOCS:
            return;
        default:
            return state;
    }
}