import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Item } from '../utils/UI';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

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
