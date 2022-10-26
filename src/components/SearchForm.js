import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterCharacterRequest } from '../actions/character';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

function SearchForm(props) {
  const [searchText, setSearchText] = useState('');

  const handlerSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearchChar(searchText);
  }, [searchText]);

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <FormControl variant="standard">
        <label htmlFor="input-with-icon-adornment">Search</label>
        <input type="text" value={searchText} onChange={(e) => handlerSearchText(e)} autoFocus />
      </FormControl>
    </Box>
  );
}

export default connect(({ character }) => ({ character }), {
  filterCharacterRequest,
})(SearchForm);
