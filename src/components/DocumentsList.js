import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import { getDocument } from '../api/getDocument';
// import { SearchContext } from '../context/searchContext'


export function DocumentsList(props) {
  // const { searchDocuments, searchResult } = useContext(SearchContext)

  const hightLightText = (text, words) => {
    return text.split(" ").map(w => {
      return words.includes(w) ? <span class='high-light'>${w}</span> : <span>${w}</span>
    })
  }

  const onClick = async (doc, words) => {
    try {
      const { setDocument } = props;
      const { docId } = doc;
      const result = await getDocument(docId, words);
      const { body } = result;
      const highlightText = body.split(" ").map(w => {
        return words.includes(w) ? <span class='high-light'>{w} </span> : <span>{w} </span>
      })

      // const hightLightText = hightLightText(result.body, words);
      // const parsedData = JSON.parse(result);
      setDocument(highlightText);
      console.log('result==>', result);

      // setDocsList(result)
    } catch (error) {
      console.log('error');
    }
  }

  const getWordFiles = () => {
    const { docsList, } = props;
    if (docsList && docsList.docs) {
      const { docs, words } = props.docsList;
      return docs.map(doc => <Paper key={doc.docId}>
        <ListItem button onClick={() => onClick(doc, words)} divider item={doc}>
          <ListItemText primary={doc.docId} secondary={doc.title} />
        </ListItem>
      </Paper>)
    }
  }

  return <List style={{ padding: 20 }}>
    {getWordFiles()}
  </List>
}