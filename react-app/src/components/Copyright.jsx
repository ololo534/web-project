import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import React from "react";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/ololo534/web-project">
                Web-project
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright
