import React, { useContext, useEffect, useReducer, useState } from 'react';
import { DocumentsList } from './components/DocumentsList';
import Navbar from './components/Navbar.js';
import { SearchInput } from './components/SearchInput';
import AdminPannel from './components/AdminPannel';
import { SearchContext } from './context/searchContext';
import { SearchReducer } from './context/reducers';
import './style.css';

import { searchRequest } from './api/searchRequest';



function HomePage() {
  const [docsList, setDocsList] = useState();
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [searchInput, setSearchInput] = useState('');

  const [document, setDocument] = useState();

  const [state, dispatch] = useReducer(SearchReducer);

  const handleSearch = async (searchQuery) => {
    try {
      setIsLoading(true);
      const result = await searchRequest(searchQuery);
      setDocsList(result)
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  }

  const addDocument = document => { };
  const removeDocument = document => { };
  const searchDocuments = query => { console.log('search...') }

  return <SearchContext.Provider value={{
    addDocument,
    removeDocument,
    searchDocuments,
    // searchResult,
  }} >
    <Navbar />
    <SearchInput handleSearch={handleSearch} />
    <AdminPannel />
    <DocumentsList docsList={docsList} setDocument={setDocument} />
    <main >
      {document}
    </main>
  </SearchContext.Provider>
}

export default HomePage