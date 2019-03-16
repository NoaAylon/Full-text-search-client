import React, { useContext, useEffect, useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { DocumentsList } from './components/DocumentsList';
import Navbar from './components/Navbar.js';
import { SearchInput } from './components/SearchInput';
import AdminPannel from './components/AdminPannel';
import { SearchContext } from './context/searchContext';
import { AdminContext } from './context/adminContext';
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

export function HomePage() {
  const classes = useStyles();
  const [docsList, setDocsList] = useState();
  const [document, setDocument] = useState();
  const [isLoading, setIsLoading] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [state, dispatch] = useReducer(SearchReducer);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('render HomePage')
  }, []);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    const result = await searchRequest(searchQuery);
    setDocsList(result)
    setIsLoading(false);
  }



  return <SearchContext.Provider value={{
    setDocument,
  }} >
    <Navbar />
    <div className={classes.container}>
      <SearchInput handleSearch={handleSearch} />
      <Divider style={{ margin: '15px 0' }} />
      <AdminPannel />
      <main className={classes.main}>
        <DocumentsList docsList={docsList} setDocument={setDocument} />
        <Document>{document}</Document>
      </main>
    </div>
  </SearchContext.Provider>
}