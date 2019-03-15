import React, { useContext, useEffect, useReducer, useState } from 'react';
import { DocumentsList } from './components/DocumentsList';
import Navbar from './components/Navbar.js';
import { SearchInput } from './components/SearchInput';
import AdminPannel from './components/AdminPannel';
import { SearchContext } from './context/searchContext';
import { SearchReducer } from './context/reducers';



function HomePage() {
    const [searchResult, setSearchResult] = useState([{ id: '001', title: 'this is a test' }]);
    const [documents, setDocuments] = useState([]);
    const [state, dispatch] = useReducer(SearchReducer);

    const addDocument = document => { };
    const removeDocument = document => { };
    const searchDocuments = query => { console.log('search...') }

    return <SearchContext.Provider value={{
        searchResult,
        addDocument,
        removeDocument,
        searchDocuments
    }} >
        <Navbar />
        <SearchInput />
        <AdminPannel />
        <DocumentsList />
    </SearchContext.Provider>
}

export default HomePage