import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Posts({ data }) {
  const classes = useStyles();
  
  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            language - {data.language}
          </Typography>
          {data.tags.slice(0, 4).map((val, i) => (
            <>
              <Typography className={classes.pos} color="textSecondary">
                {val}
              </Typography>
            </>
          ))}
        </CardContent>
      </Card>
    </Grid>

  );
}