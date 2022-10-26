import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterCharacterRequest } from '../actions/character';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

function SearchForm(props) {
  const { onSearchChar } = props;
  const [searchText, setSearchText] = useState('');

  const handlerSearchText = (e) => {
    setSearchText(e.target.value);
    onSearchChar(searchText);
  };

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
