import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../card'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Posts({data}) {
    const classes = useStyles();

    return (
            <div className={classes.root}>
              <Grid container spacing={3}>
              {data.map((val, i) => (
                <>
                       <Card data={val}/>
                </>
              ))}
                </Grid>
            </div>
    )
}
