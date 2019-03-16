import React, { useContext, useEffect, useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { DocumentsList } from './components/DocumentsList';
import Navbar from './components/Navbar.js';
import { SearchInput } from './components/SearchInput';
import AdminPannel from './components/AdminPannel';
import { SearchContext } from './context/searchContext';
import { SearchReducer } from './context/reducers';
import { searchRequest } from './api/searchRequest';
import { Divider } from '@material-ui/core';
import { Document } from './components/Document';
import './style.css';

const useStyles = makeStyles({
  container: {
    padding: 30
  },
  divider: {
    marginTop: 15
  },
  main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

function HomePage() {
  const classes = useStyles();
  const [docsList, setDocsList] = useState();
  const [document, setDocument] = useState();
  const [isLoading, setIsLoading] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [state, dispatch] = useReducer(SearchReducer);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    const result = await searchRequest(searchQuery);
    setDocsList(result)
    setIsLoading(false);
  }

  const addDocument = document => { };
  const removeDocument = document => { };
  const searchDocuments = query => { console.log('search...') }

  return <SearchContext.Provider value={{
    addDocument,
    removeDocument,
    searchDocuments,
    setDocument
  }} >
    <Navbar />
    <div className={classes.container}>
      <SearchInput handleSearch={handleSearch} />
      <Divider style={{ marginTop: 15 }} />
      <AdminPannel />
      <main className={classes.main}>
        <DocumentsList docsList={docsList} setDocument={setDocument} />
        <Document>{document}</Document>
      </main>
    </div>
  </SearchContext.Provider>
}

export default HomePage