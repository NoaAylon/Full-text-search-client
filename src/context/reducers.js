import React, { useContext, useEffect, useReducer, useState } from 'react';
export const ADD_DOC = 'ADD_DOC';
export const REMOVE_DOC = 'REMOVE_DOC';
export const SEARCH_DOCS = 'SEARCH_DOCS';

export const SearchReducer = (state, action) => {
    const [searchInput, setSearchInput] = useState('');

    switch (action.type) {
        case ADD_DOC:
            alert('add document');
            return;
        case REMOVE_DOC:
            return;
        case SEARCH_DOCS:
            return;
        default:
            return state;
    }
}