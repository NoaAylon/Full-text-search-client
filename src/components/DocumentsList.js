import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { SearchContext } from '../context/searchContext'
import { Paper } from '@material-ui/core';


export function DocumentsList() {
  const { searchDocuments, searchResult } = useContext(SearchContext)

  const getWordFiles = () => {
    return searchResult.map(doc => <Paper>
      <ListItem button onClick={searchDocuments} divider item={doc} key={doc.id}>
        <ListItemText primary={doc.id} secondary={doc.title} />
      </ListItem>
    </Paper>)
  }

  return <List style={{ padding: 20 }}>
    {getWordFiles()}
  </List>
}

