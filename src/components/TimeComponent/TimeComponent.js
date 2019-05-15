import React from 'react';
import './TimeComponent.css';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 400,
    },
  });


const timeComponent = (props) => {
    const { classes } = props;

    return (
            <TableRow>
              <TableCell>{props.destination}</TableCell>
              <TableCell align="right">{props.time}</TableCell>
            </TableRow>
    )
};


export default withStyles(styles)(timeComponent);