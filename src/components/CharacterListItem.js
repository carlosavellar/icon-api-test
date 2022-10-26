import React from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export const CharacterListItem = (props) => {
  return (
    <Grid item xs={3} md={3}>
      <Grid container>
        <Grid item sm={6}>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            <CardMedia component="img" height="134" image={props.charItem.image} alt="Paella dish" />
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <CardContent>
            <Typography variant="">{props.charItem.name}</Typography>
            <Typography variant="" component="p">
              Gender: {props.charItem.gender}
            </Typography>
            <Typography variant="" component="p">
              Status: {props.charItem.status}
            </Typography>
            <Typography variant="" component="p">
              Species: {props.charItem.species}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Grid>
  );
};
