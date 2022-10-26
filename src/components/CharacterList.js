import React from 'react';
import { CharacterListItem } from './CharacterListItem';
import Grid from '@mui/material/Grid';
import { Item } from './../utils/UI';
export const CharacterList = (props) => {
  return (
    <Grid container spacing={2}>
      {props.characters.map((item, index) => {
        return <CharacterListItem charItem={item} key={index} />;
      })}
    </Grid>
  );
};
