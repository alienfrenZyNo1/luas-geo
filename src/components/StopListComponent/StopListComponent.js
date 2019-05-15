import React from 'react';
import './StopListComponent.css';

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
      minWidth: 700,
    },
  });


const stopListComponent = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Destination</TableCell>
            <TableCell align="right">Minutes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{props.destination}</TableCell>
              <TableCell align="right">{props.time}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
    )
};


export default withStyles(styles)(stopListComponent);