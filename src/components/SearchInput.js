import React, { useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { SearchReducer } from '../context/reducers';

const useStyles = makeStyles({
  root: {
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    margin: '16px 16px'
  },
  input: {
    marginLeft: 30,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});




export function SearchInput(props) {
  const classes = useStyles();
  const [state, dispatce] = useReducer(SearchReducer)
  const [searchInput, setSearchInput] = useState('');

  const handleChange = event => {
    console.log(event.target.value)
    setSearchInput(event.target.value);
  };

  const handleKeyPressed = async (event) => {
    const { handleSearch } = props;

    if (event.key === 'Enter') {
      event.preventDefault();
      await handleSearch(searchInput);
      setSearchInput("");
    }
  };

  const onClickSearch = async () => {
    const { handleSearch } = props;
    await handleSearch(searchInput);
    setSearchInput("");
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <InputBase onChange={handleChange}
        onKeyPress={handleKeyPressed}
        className={classes.input}
        placeholder="Search Query"
        value={searchInput} />
      <IconButton onClick={onClickSearch} className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

