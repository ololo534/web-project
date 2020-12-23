import React from "react";
import Grid from "@material-ui/core/Grid";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {makeStyles} from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";


const useStyles = makeStyles((theme) => ({
    logo: {
        width: '100px',
        height: '100px',
        margin: theme.spacing(1),
        color: blue[900],
    },
    logoText:{
        fontSize: '30px',
        fontWeight: "bold",
        position: 'relative',
        top: '25%',
    }
}));

export default function Logo(){
    const classes = useStyles();
    return(
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <ListAltIcon className={classes.logo} />
            </Grid>
            <Grid item xs={6}>
                <div className={classes.logoText}>ToDo List</div>
            </Grid>
        </Grid>
    )
}
