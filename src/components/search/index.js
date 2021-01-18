import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: '30px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 26,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Search({value,onChange}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {/* <Typography className={classes.title} variant="h5" component="h6" gutterBottom>
                   Search
                </Typography> */}
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="Search..."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                 />
            </CardContent>
        </Card>
    );
}
