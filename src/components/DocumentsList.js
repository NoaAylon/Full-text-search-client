import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import { getDocument } from '../api/getDocument';
import natural from 'natural';

// import { SearchContext } from '../context/searchContext'


export function DocumentsList(props) {
  // const { searchDocuments, searchResult } = useContext(SearchContext)

  const onClick = async (doc, words) => {
    try {
      const { setDocument } = props;
      const { docId } = doc;
      const result = await getDocument(docId, words);
      const { body } = result;
      const wordsWithStemWords = pushStemWords(words);
      console.log('wordsWithStemWords', wordsWithStemWords)
      const highlightText = body.split(" ").map(w => {
        const token = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        const stemToken = natural.PorterStemmer.stem(token)

        if (wordsWithStemWords.includes(token)) {
          return <span class='high-light'>{w} </span>;
        } else if (wordsWithStemWords.includes(stemToken)) {
          return <span class='high-light'>{w} </span>;
        } else {
          return <span>{w} </span>;
        }
      })
      setDocument(highlightText);
    } catch (error) {
      console.log('error');
    }
  }

  const pushStemWords = (words) => {
    const stemWords = words.map(w => natural.PorterStemmer.stem(w));
    return [...words, ...stemWords];
  }

  const getListItems = () => {
    const { docsList, } = props;
    if (docsList && docsList.docs) {
      const { docs, words } = props.docsList;
      return docs.map(doc => <ListItem button divider onClick={() => onClick(doc, words)} key={doc.docId}>
        <ListItemText primary={doc.docId} secondary={doc.title} />
      </ListItem>)
    }
  }

  return <Paper style={{ flex: 1, height: 240, marginRight: 40, overflowY: 'scroll' }}>
    <List >
      {getListItems()}
    </List>
  </Paper>
}